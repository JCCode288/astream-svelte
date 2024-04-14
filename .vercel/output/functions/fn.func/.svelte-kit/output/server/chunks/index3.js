import { load } from "cheerio";
import { ANIME, SubOrSub, MediaStatus, StreamingServers } from "@consumet/extensions";
import { GogoCDN, StreamSB } from "@consumet/extensions/dist/extractors/index.js";
import { USER_AGENT } from "@consumet/extensions/dist/utils/index.js";
const animeExtractor = (epsId) => {
  const match = /^(.*)-episode-(\d+)$/is.exec(epsId);
  if (match)
    return { animeId: match[1], epsNum: +match[2] };
  return null;
};
class AnimeProvider {
  constructor(provider) {
    this.provider = provider;
  }
  async genre(genre, page = 1) {
    return await this.provider.fetchGenreInfo(genre, page);
  }
  async recent(page = 1) {
    return await this.provider.fetchRecentEpisodes(page);
  }
  async top(page = 1) {
    return await this.provider.fetchTopAiring(page);
  }
  async popular(page = 1) {
    return await this.provider.fetchPopular(page);
  }
  async detail(animeId) {
    return await this.provider.fetchAnimeInfo(animeId);
  }
  async search(query, page = 1) {
    return await this.provider.search(query, page);
  }
  async allGenres() {
    return await this.provider.fetchGenreList();
  }
  async stream(episodeId) {
    const { animeId, epsNum } = animeExtractor(episodeId) ?? { animeId: "noanime", epsNum: null };
    const [source, anime] = await Promise.all([
      this.provider.fetchEpisodeSources(episodeId),
      this.provider.fetchAnimeInfo(animeId)
    ]);
    const stream = { ...source, anime, curEps: epsNum };
    const epsIdx = epsNum ? anime.episodes?.findIndex((anime2) => anime2.number === epsNum) : 0;
    if (anime.episodes && epsIdx) {
      stream.next = anime.episodes[epsIdx + 1];
      stream.prev = anime.episodes[epsIdx - 1];
    }
    return stream;
  }
  async movies(page = 1) {
    return await this.provider.fetchRecentMovies(page);
  }
  async main(query) {
    const [recent, top, popular, movies] = await Promise.all([
      this.provider.fetchRecentEpisodes(query?.recent),
      this.provider.fetchTopAiring(query?.top),
      this.provider.fetchPopular(query?.popular),
      this.provider.fetchRecentMovies(query?.movies)
    ]);
    return {
      recent,
      top,
      popular,
      movies
    };
  }
}
class ConsumetGogo extends ANIME.Gogoanime {
  constructor() {
    super();
    this.baseUrl = "http://anitaku.so";
    this.name = "Gogoanime";
    this.logo = "https://play-lh.googleusercontent.com/MaGEiAEhNHAJXcXKzqTNgxqRmhuKB1rCUgb15UrN_mWUNRnLpO5T1qja64oRasO7mn0";
    this.classPath = "ANIME.Gogoanime";
    this.search = async (query, page = 1) => {
      const searchResult = {
        currentPage: page,
        hasNextPage: false,
        results: []
      };
      try {
        const res = await this.client.get(
          `${this.baseUrl}/filter.html?keyword=${encodeURIComponent(query)}&page=${page}`
        );
        const $ = load(res.data);
        searchResult.hasNextPage = $("div.anime_name.new_series > div > div > ul > li.selected").next().length > 0;
        $("div.last_episodes > ul > li").each((i, el) => {
          searchResult.results.push({
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            id: $(el)?.find("p.name > a")?.attr("href")?.split("/")[2],
            title: $(el).find("p.name > a").attr("title"),
            url: `${this.baseUrl}/${$(el).find("p.name > a").attr("href")}`,
            image: $(el).find("div > a > img").attr("src"),
            releaseDate: $(el).find("p.released").text().trim(),
            subOrDub: $(el).find("p.name > a").text().toLowerCase().includes("dub") ? SubOrSub.DUB : SubOrSub.SUB
          });
        });
        return searchResult;
      } catch (err) {
        throw new Error(err.message);
      }
    };
    this.fetchAnimeInfo = async (id) => {
      if (!id.includes("gogoanime"))
        id = `${this.baseUrl}/category/${id}`;
      const animeInfo = {
        id: "",
        title: "",
        url: "",
        genres: [],
        totalEpisodes: 0
      };
      try {
        const res = await this.client.get(id);
        const $ = load(res.data);
        animeInfo.id = new URL(id).pathname.split("/")[2];
        animeInfo.title = $(
          "section.content_left > div.main_body > div:nth-child(2) > div.anime_info_body_bg > h1"
        ).text().trim();
        animeInfo.url = id;
        animeInfo.image = $("div.anime_info_body_bg > img").attr("src");
        animeInfo.releaseDate = $("div.anime_info_body_bg > p:nth-child(8)").text().trim().split("Released: ")[1];
        animeInfo.description = $("div.anime_info_body_bg > div:nth-child(6)").text().trim().replace("Plot Summary: ", "");
        animeInfo.subOrDub = animeInfo.title.toLowerCase().includes("dub") ? SubOrSub.DUB : SubOrSub.SUB;
        animeInfo.type = $("div.anime_info_body_bg > p:nth-child(4) > a").text().trim().toUpperCase();
        animeInfo.status = MediaStatus.UNKNOWN;
        switch ($("div.anime_info_body_bg > p:nth-child(9) > a").text().trim()) {
          case "Ongoing":
            animeInfo.status = MediaStatus.ONGOING;
            break;
          case "Completed":
            animeInfo.status = MediaStatus.COMPLETED;
            break;
          case "Upcoming":
            animeInfo.status = MediaStatus.NOT_YET_AIRED;
            break;
          default:
            animeInfo.status = MediaStatus.UNKNOWN;
            break;
        }
        animeInfo.otherName = $("div.anime_info_body_bg > p:nth-child(10)").text().replace("Other name: ", "").replace(/;/g, ",");
        $("div.anime_info_body_bg > p:nth-child(7) > a").each((i, el) => {
          animeInfo.genres?.push($(el).attr("title").toString());
        });
        const ep_start = $("#episode_page > li").first().find("a").attr("ep_start");
        const ep_end = $("#episode_page > li").last().find("a").attr("ep_end");
        const movie_id = $("#movie_id").attr("value");
        const alias = $("#alias_anime").attr("value");
        const html = await this.client.get(
          `${"https://ajax.gogocdn.net/ajax"}/load-list-episode?ep_start=${ep_start}&ep_end=${ep_end}&id=${movie_id}&default_ep=${0}&alias=${alias}`
        );
        const $$ = load(html.data);
        animeInfo.episodes = [];
        $$("#episode_related > li").each((i, el) => {
          if (el) {
            animeInfo.episodes?.push({
              id: $(el).find("a").attr("href")?.split("/")[1] ?? "",
              number: parseFloat($(el).find(`div.name`).text().replace("EP ", "")),
              url: `${this.baseUrl}/${$(el).find(`a`).attr("href")?.trim()}`
            });
          }
        });
        animeInfo.episodes = animeInfo.episodes.reverse();
        animeInfo.totalEpisodes = parseInt(ep_end ?? "0");
        return animeInfo;
      } catch (err) {
        throw new Error(`failed to fetch anime info: ${err}`);
      }
    };
    this.fetchEpisodeSources = async (episodeId, server = StreamingServers.VidStreaming) => {
      if (episodeId.startsWith("http")) {
        const serverUrl = new URL(episodeId);
        switch (server) {
          case StreamingServers.GogoCDN:
            return {
              headers: { Referer: serverUrl.href },
              sources: await new GogoCDN(this.proxyConfig, this.adapter).extract(serverUrl),
              download: `https://gogohd.net/download${serverUrl.search}`
            };
          case StreamingServers.StreamSB:
            return {
              headers: {
                Referer: serverUrl.href,
                watchsb: "streamsb",
                "User-Agent": USER_AGENT
              },
              sources: await new StreamSB(this.proxyConfig, this.adapter).extract(serverUrl),
              download: `https://gogohd.net/download${serverUrl.search}`
            };
          default:
            return {
              headers: { Referer: serverUrl.href },
              sources: await new GogoCDN(this.proxyConfig, this.adapter).extract(serverUrl),
              download: `https://gogohd.net/download${serverUrl.search}`
            };
        }
      }
      try {
        const res = await this.client.get(`${this.baseUrl}/${episodeId}`);
        const $ = load(res.data);
        let serverUrl;
        switch (server) {
          case StreamingServers.GogoCDN:
            serverUrl = new URL(`${$("#load_anime > div > div > iframe").attr("src")}`);
            break;
          case StreamingServers.VidStreaming:
            serverUrl = new URL(
              `${$("div.anime_video_body > div.anime_muti_link > ul > li.vidcdn > a").attr("data-video")}`
            );
            break;
          case StreamingServers.StreamSB:
            serverUrl = new URL(
              $("div.anime_video_body > div.anime_muti_link > ul > li.streamsb > a").attr(
                "data-video"
              )
            );
            break;
          default:
            serverUrl = new URL(`${$("#load_anime > div > div > iframe").attr("src")}`);
            break;
        }
        return await this.fetchEpisodeSources(serverUrl.href, server);
      } catch (err) {
        console.log(err);
        throw new Error("Episode not found.");
      }
    };
    this.fetchEpisodeServers = async (episodeId) => {
      try {
        if (!episodeId.startsWith(this.baseUrl))
          episodeId = `${this.baseUrl}/${episodeId}`;
        const res = await this.client.get(episodeId);
        const $ = load(res.data);
        const servers = [];
        $("div.anime_video_body > div.anime_muti_link > ul > li").each((i, el) => {
          let url = $(el).find("a").attr("data-video");
          if (!url?.startsWith("http"))
            url = `https:${url}`;
          servers.push({
            name: $(el).find("a").text().replace("Choose this server", "").trim(),
            url
          });
        });
        return servers;
      } catch (err) {
        throw new Error("Episode not found.");
      }
    };
    this.fetchAnimeIdFromEpisodeId = async (episodeId) => {
      try {
        if (!episodeId.startsWith(this.baseUrl))
          episodeId = `${this.baseUrl}/${episodeId}`;
        const res = await this.client.get(episodeId);
        const $ = load(res.data);
        return $(
          "#wrapper_bg > section > section.content_left > div:nth-child(1) > div.anime_video_body > div.anime_video_body_cate > div.anime-info > a"
        ).attr("href").split("/")[2];
      } catch (err) {
        throw new Error("Episode not found.");
      }
    };
    this.fetchRecentEpisodes = async (page = 1, type = 1) => {
      try {
        const res = await this.client.get(
          `${"https://ajax.gogocdn.net/ajax"}/page-recent-release.html?page=${page}&type=${type}`
        );
        const $ = load(res.data);
        const recentEpisodes = [];
        $("div.last_episodes.loaddub > ul > li").each((i, el) => {
          if (el) {
            recentEpisodes.push({
              id: $(el).find("a").attr("href")?.split("/")[1].split("-episode")[0] ?? "",
              episodeId: $(el).find("a").attr("href")?.split("/")[1] ?? "",
              episodeNumber: parseFloat($(el).find("p.episode").text().replace("Episode ", "")),
              title: $(el).find("p.name > a").attr("title"),
              image: $(el).find("div > a > img").attr("src"),
              url: `${this.baseUrl}${$(el).find("a").attr("href")?.trim()}`
            });
          }
        });
        const hasNextPage = !$("div.anime_name_pagination.intro > div > ul > li").last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: recentEpisodes
        };
      } catch (err) {
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchGenreInfo = async (genre, page = 1) => {
      try {
        const res = await this.client.get(`${this.baseUrl}/genre/${genre}?page=${page}`);
        const $ = load(res.data);
        const genreInfo = [];
        $("div.last_episodes > ul > li").each((i, elem) => {
          genreInfo.push({
            id: $(elem).find("p.name > a").attr("href")?.split("/")[2],
            title: $(elem).find("p.name > a").attr("title"),
            image: $(elem).find("div > a > img").attr("src"),
            released: $(elem).find("p.released").text().replace("Released: ", "").trim(),
            url: this.baseUrl + "/" + $(elem).find("p.name > a").attr("href")
          });
        });
        const paginatorDom = $("div.anime_name_pagination > div > ul > li");
        const hasNextPage = paginatorDom.length > 0 && !paginatorDom.last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: genreInfo
        };
      } catch (err) {
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchTopAiring = async (page = 1) => {
      try {
        const res = await this.client.get(
          `${"https://ajax.gogocdn.net/ajax"}/page-recent-release-ongoing.html?page=${page}`
        );
        const $ = load(res.data);
        const topAiring = [];
        $("div.added_series_body.popular > ul > li").each((i, el) => {
          if (el) {
            topAiring.push({
              id: $(el).find("a:nth-child(1)").attr("href")?.split("/")[2] ?? "",
              title: $(el).find("a:nth-child(1)").attr("title"),
              image: $(el).find("a:nth-child(1) > div").attr("style")?.match("(https?://.*.(?:png|jpg))")[0],
              url: `${this.baseUrl}${$(el).find("a:nth-child(1)").attr("href")}`,
              genres: $(el).find("p.genres > a").map((i2, el2) => $(el2).attr("title")).get()
            });
          }
        });
        const hasNextPage = !$("div.anime_name.comedy > div > div > ul > li").last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: topAiring
        };
      } catch (err) {
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchRecentMovies = async (page = 1) => {
      try {
        const res = await this.client.get(`${this.baseUrl}/anime-movies.html?aph&page=${page}`);
        const $ = load(res.data);
        const recentMovies = [];
        $("div.last_episodes > ul > li").each((i, el) => {
          const a = $(el).find("p.name > a");
          const pRelease = $(el).find("p.released");
          const pName = $(el).find("p.name > a");
          recentMovies.push({
            id: a.attr("href")?.replace(`/category/`, "") ?? "",
            title: pName.attr("title"),
            releaseDate: pRelease.text().replace("Released: ", "").trim(),
            image: $(el).find("div > a > img").attr("src"),
            url: `${this.baseUrl}${a.attr("href")}`
          });
        });
        const hasNextPage = !$("div.anime_name.anime_movies > div > div > ul > li").last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: recentMovies
        };
      } catch (err) {
        console.log(err);
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchPopular = async (page = 1) => {
      try {
        const res = await this.client.get(`${this.baseUrl}/popular.html?page=${page}`);
        const $ = load(res.data);
        const recentMovies = [];
        $("div.last_episodes > ul > li").each((i, el) => {
          const a = $(el).find("p.name > a");
          const pRelease = $(el).find("p.released");
          const pName = $(el).find("p.name > a");
          recentMovies.push({
            id: a.attr("href")?.replace(`/category/`, "") ?? "",
            title: pName.attr("title"),
            releaseDate: pRelease.text().replace("Released: ", "").trim(),
            image: $(el).find("div > a > img").attr("src"),
            url: `${this.baseUrl}${a.attr("href")}`
          });
        });
        const hasNextPage = !$("div.anime_name.anime_movies > div > div > ul > li").last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: recentMovies
        };
      } catch (err) {
        console.log(err);
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchGenreList = async () => {
      const genres = [];
      let res = null;
      try {
        res = await this.client.get(`${this.baseUrl}/home.html`);
      } catch (err) {
        try {
          res = await this.client.get(`${this.baseUrl}/`);
        } catch (error) {
          throw new Error(
            err?.message ?? "Something went wrong. Please try again later."
          );
        }
      }
      try {
        const $ = load(res.data);
        $("nav.menu_series.genre.right > ul > li").each((_index, element) => {
          const genre = $(element).find("a");
          genres.push(
            {
              id: genre.attr("href")?.replace("/genre/", ""),
              title: genre.attr("title")
            }
          );
        });
        return genres;
      } catch (err) {
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
    this.fetchAnimeList = async (page = 1) => {
      const animeList = [];
      let res = null;
      try {
        res = await this.client.get(`${this.baseUrl}/anime-list.html?page=${page}`);
        const $ = load(res.data);
        $(".anime_list_body .listing li").each((_index, element) => {
          const genres = [];
          const entryBody = $("p.type", $(element).attr("title"));
          const genresEl = entryBody.first();
          genresEl.find("a").each((_idx, genreAnchor) => {
            genres.push($(genreAnchor).attr("title"));
          });
          const releaseDate = $(entryBody.get(1)).text();
          const img = $("div", $(element).attr("title"));
          const a = $(element).find("a");
          animeList.push({
            id: a.attr("href")?.replace(`/category/`, "") ?? "",
            title: a.text(),
            image: $(img).find("img").attr("src"),
            url: `${this.baseUrl}${a.attr("href")}`,
            genres,
            releaseDate
          });
        });
        const hasNextPage = !$("div.anime_name.anime_list > div > div > ul > li").last().hasClass("selected");
        return {
          currentPage: page,
          hasNextPage,
          results: animeList
        };
      } catch (err) {
        throw new Error(err?.message ?? "Something went wrong. Please try again later.");
      }
    };
  }
}
const Provider = Object.freeze(new AnimeProvider(new ConsumetGogo()));
export {
  Provider as P
};
