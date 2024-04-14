import type { IAnimeInfo, IAnimeResult, ISearch } from "@consumet/extensions/dist/models";
import { type IProviderStrategy } from "../interfaces/provider.strategy";
import type { IMainPage, IGenreAnime, IStream, IMainQuery } from "../interfaces/provider.interface";
import type Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import { animeExtractor } from "../../utils/anime-id.extractor";

export class AnimeProvider<T extends Gogoanime> implements IProviderStrategy {
	constructor(private readonly provider: T) {}
	async genre(genre: string, page: number = 1): Promise<ISearch<IAnimeResult>> {
		return await this.provider.fetchGenreInfo(genre, page);
	}
	async recent(page: number = 1): Promise<ISearch<IAnimeResult>> {
		return await this.provider.fetchRecentEpisodes(page);
	}
	async top(page: number = 1): Promise<ISearch<IAnimeResult>> {
		return await this.provider.fetchTopAiring(page);
	}
	async popular(page: number = 1): Promise<ISearch<IAnimeResult>> {
		return await this.provider.fetchPopular(page);
	}
	async detail(animeId: string): Promise<IAnimeInfo> {
		return await this.provider.fetchAnimeInfo(animeId);
	}
	async search(query: string, page: number = 1): Promise<ISearch<IAnimeResult>> {
		return await this.provider.search(query, page);
	}
	async allGenres(): Promise<IGenreAnime[]> {
		return await this.provider.fetchGenreList();
	}
	async stream(episodeId: string): Promise<IStream> {
		const { animeId, epsNum } = animeExtractor(episodeId) ?? { animeId: "noanime", epsNum: null };

		const [source, anime] = await Promise.all([
			this.provider.fetchEpisodeSources(episodeId),
			this.provider.fetchAnimeInfo(animeId)
		]);
		const stream: IStream = { ...source, anime, curEps: epsNum };

		const epsIdx = epsNum ? anime.episodes?.findIndex((anime) => anime.number === epsNum) : null;

		if (anime.episodes && epsIdx !== null && epsIdx !== undefined) {
			stream.next = anime.episodes[epsIdx + 1];
			stream.prev = anime.episodes[epsIdx - 1];
		}

		return stream;
	}
	async movies(page: number = 1) {
		return await this.provider.fetchRecentMovies(page);
	}

	async main(query?: IMainQuery): Promise<IMainPage> {
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
