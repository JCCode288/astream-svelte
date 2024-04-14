import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as add_attribute, v as validate_component, h as escape, k as subscribe, l as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { B as Button } from "../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { C as Card, t as titleShorten, G as GradientButton, R as Reels, s as swiperClass, A as Ani_card } from "../../chunks/ani-card.js";
import "../../chunks/index.js";
import "swiper";
import "swiper/modules";
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "bg", "customColor", "size", "currentFill", "currentColor"]);
  let { color = "primary" } = $$props;
  let { bg = "text-gray-300" } = $$props;
  let { customColor = "" } = $$props;
  let { size = "8" } = $$props;
  let { currentFill = "currentFill" } = $$props;
  let { currentColor = "currentColor" } = $$props;
  let iconsize = `w-${size} h-${size}`;
  if (currentFill !== "currentFill") {
    color = void 0;
  }
  const fillColorClasses = {
    primary: "fill-primary-600",
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white",
    custom: customColor
  };
  let fillColorClass = color === void 0 ? "" : fillColorClasses[color] ?? fillColorClasses.blue;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.customColor === void 0 && $$bindings.customColor && customColor !== void 0)
    $$bindings.customColor(customColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0)
    $$bindings.currentFill(currentFill);
  if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0)
    $$bindings.currentColor(currentColor);
  return `<svg${spread(
    [
      escape_object($$restProps),
      { role: "status" },
      {
        class: escape_attribute_value(twMerge("inline -mt-px animate-spin dark:text-gray-600", iconsize, bg, fillColorClass, $$props.class))
      },
      { viewBox: "0 0 100 101" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"${add_attribute("fill", currentColor, 0)}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"${add_attribute("fill", currentFill, 0)}></path></svg> `;
});
const Eps_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animeTitle;
  let watchUrl;
  let detailUrl;
  let { anime } = $$props;
  if ($$props.anime === void 0 && $$bindings.anime && anime !== void 0)
    $$bindings.anime(anime);
  animeTitle = `${anime.title.toString()} - ${anime.episodeNumber}`;
  watchUrl = `stream/${btoa(anime.id + "-episode-" + anime.episodeNumber)}`;
  detailUrl = "/detail/" + anime.id;
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      padding: "none",
      size: "xs",
      class: "flex h-[47vh] justify-between rounded-md bg-secondary-200"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col justify-center gap-3 px-5 py-2 align-middle"><a${add_attribute("href", detailUrl, 0)}><div class="relative flex h-[25vh] w-auto rounded-sm bg-cover bg-center" style="${"background-image: url('" + escape(anime?.cover ?? anime.image, true) + "')"}"></div></a> <a${add_attribute("href", detailUrl, 0)}><h4 class="whitespace-break-spaces pb-1 text-center text-xl font-semibold tracking-tight text-gray-900">${escape(titleShorten(animeTitle))}</h4></a></div> <div class="mx-auto mb-4 w-[80%]">${validate_component(GradientButton, "GradientButton").$$render(
          $$result,
          {
            class: "mt-1 flex items-center justify-center text-lg duration-500 ease-in-out",
            outline: true,
            color: "pinkToOrange",
            href: watchUrl
          },
          {},
          {
            default: () => {
              return `Watch Now`;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
const Recent_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $recent, $$unsubscribe_recent;
  let $recent_page, $$unsubscribe_recent_page;
  let { recent } = $$props;
  $$unsubscribe_recent = subscribe(recent, (value) => $recent = value);
  let { recent_page } = $$props;
  $$unsubscribe_recent_page = subscribe(recent_page, (value) => $recent_page = value);
  if ($$props.recent === void 0 && $$bindings.recent && recent !== void 0)
    $$bindings.recent(recent);
  if ($$props.recent_page === void 0 && $$bindings.recent_page && recent_page !== void 0)
    $$bindings.recent_page(recent_page);
  loading = false;
  $$unsubscribe_recent();
  $$unsubscribe_recent_page();
  return `<div class="flex h-full flex-col justify-between"><h2 class="mx-8 mt-8 text-4xl font-bold text-red-700" data-svelte-h="svelte-o5gdfb">Recent Animes</h2> <div class="relative flex h-fit flex-col justify-center align-middle">${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})} <div${add_attribute("class", swiperClass.RECENT, 0)}><div class="swiper-wrapper">${each($recent.results, (anime) => {
    return `<div class="swiper-slide" style="display: flex; width: 100%; justify-content: center; align-items: center;">${validate_component(Eps_card, "EpsCard").$$render($$result, { anime }, {}, {})} </div>`;
  })}</div> <div class="swiper-pagination"></div></div> ${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})}</div> <div class="relative bottom-8 flex w-screen justify-center gap-2 text-nowrap">${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $recent_page > 1 ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )}` : `Prev Page`}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $recent.hasNextPage ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )} ` : `Next Page
			`}`;
      }
    }
  )}</div></div>`;
});
const Top_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $top, $$unsubscribe_top;
  let $top_page, $$unsubscribe_top_page;
  let { top } = $$props;
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  let { top_page } = $$props;
  $$unsubscribe_top_page = subscribe(top_page, (value) => $top_page = value);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.top_page === void 0 && $$bindings.top_page && top_page !== void 0)
    $$bindings.top_page(top_page);
  loading = false;
  $$unsubscribe_top();
  $$unsubscribe_top_page();
  return `<div class="flex h-full flex-col justify-between"><h2 class="mx-8 mt-8 text-4xl font-bold text-red-700" data-svelte-h="svelte-jg149n">Top Animes</h2> <div class="relative flex h-full flex-col justify-center align-middle">${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})} <div${add_attribute("class", swiperClass.TOP, 0)}><div class="swiper-wrapper">${each($top.results, (anime) => {
    return `<div class="swiper-slide" style="display: flex; width: 100%; justify-content: center; align-items: center;">${validate_component(Ani_card, "AniCard").$$render($$result, { anime }, {}, {})} </div>`;
  })}</div></div> ${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})}</div> <div class="relative bottom-8 flex w-screen justify-center gap-2 text-nowrap">${validate_component(Button, "Button").$$render($$result, { disabled: $top_page > 1 ? false : true }, {}, {
    default: () => {
      return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
        $$result,
        {
          class: "me-3 w-12",
          size: "5",
          color: "white"
        },
        {},
        {
          default: () => {
            return `Loading...`;
          }
        }
      )}` : `Prev Page`}`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $top.hasNextPage ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )} ` : `Next Page
			`}`;
      }
    }
  )}</div></div>`;
});
const Popular_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $popular, $$unsubscribe_popular;
  let $popular_page, $$unsubscribe_popular_page;
  let { popular } = $$props;
  $$unsubscribe_popular = subscribe(popular, (value) => $popular = value);
  let { popular_page } = $$props;
  $$unsubscribe_popular_page = subscribe(popular_page, (value) => $popular_page = value);
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  if ($$props.popular_page === void 0 && $$bindings.popular_page && popular_page !== void 0)
    $$bindings.popular_page(popular_page);
  loading = false;
  $$unsubscribe_popular();
  $$unsubscribe_popular_page();
  return `<div class="flex h-full flex-col justify-between"><h2 class="mx-8 mt-8 text-4xl font-bold text-red-700" data-svelte-h="svelte-1stry3d">Popular Animes</h2> <div class="relative flex h-full flex-col justify-center align-middle">${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})} <div${add_attribute("class", swiperClass.POPULAR, 0)}><div class="swiper-wrapper">${each($popular.results, (anime) => {
    return `<div class="swiper-slide" style="display: flex; width: 100%; justify-content: center; align-items: center;">${validate_component(Ani_card, "AniCard").$$render($$result, { anime }, {}, {})} </div>`;
  })}</div></div> ${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})}</div> <div class="relative bottom-8 flex w-screen justify-center gap-2 text-nowrap">${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $popular_page > 1 ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )}` : `Prev Page`}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $popular.hasNextPage ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )} ` : `Next Page
			`}`;
      }
    }
  )}</div></div>`;
});
const Movies_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $movies, $$unsubscribe_movies;
  let $movies_page, $$unsubscribe_movies_page;
  let { movies } = $$props;
  $$unsubscribe_movies = subscribe(movies, (value) => $movies = value);
  let { movies_page } = $$props;
  $$unsubscribe_movies_page = subscribe(movies_page, (value) => $movies_page = value);
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.movies_page === void 0 && $$bindings.movies_page && movies_page !== void 0)
    $$bindings.movies_page(movies_page);
  loading = false;
  $$unsubscribe_movies();
  $$unsubscribe_movies_page();
  return `<div class="flex h-full flex-col justify-between"><h2 class="mx-8 mt-8 text-4xl font-bold text-red-700" data-svelte-h="svelte-fyc7ky">Movie Animes</h2> <div class="relative flex h-full flex-col justify-center align-middle">${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})} <div${add_attribute("class", swiperClass.MOVIES, 0)}><div class="swiper-wrapper">${each($movies.results, (anime) => {
    return `<div class="swiper-slide" style="display: flex; width: 100%; justify-content: center; align-items: center;">${validate_component(Ani_card, "AniCard").$$render($$result, { anime }, {}, {})} </div>`;
  })}</div></div> ${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})}</div> <div class="relative bottom-8 flex w-screen justify-center gap-2 text-nowrap">${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $movies_page > 1 ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )}` : `Prev Page`}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $movies.hasNextPage ? false : true
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Spinner, "Spinner").$$render(
          $$result,
          {
            class: "me-3 w-12",
            size: "5",
            color: "white"
          },
          {},
          {
            default: () => {
              return `Loading...`;
            }
          }
        )} ` : `Next Page
			`}`;
      }
    }
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const recent = writable(data.recent);
  const top = writable(data.top);
  const popular = writable(data.popular);
  const movies = writable(data.movies);
  const recent_page = writable(data.recent.currentPage);
  const top_page = writable(data.top.currentPage);
  const popular_page = writable(data.popular.currentPage);
  const movies_page = writable(data.movies.currentPage);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-17uorv7_START -->${$$result.title = `<title>Astreamline - streaming online</title>`, ""}<meta name="description" content="Streaming anime online with no ads"><meta name="keywords" content="Anime, Streaming, Online, No Ads"><!-- HEAD_svelte-17uorv7_END -->`, ""} <div class="verSwiper h-full overflow-hidden"><div class="swiper-wrapper"><div class="swiper-slide">${validate_component(Recent_section, "RecentSection").$$render($$result, { recent, recent_page }, {}, {})}</div> <div class="swiper-slide">${validate_component(Top_section, "TopSection").$$render($$result, { top, top_page }, {}, {})}</div> <div class="swiper-slide">${validate_component(Popular_section, "PopularSection").$$render($$result, { popular, popular_page }, {}, {})}</div> <div class="swiper-slide">${validate_component(Movies_section, "MoviesSection").$$render($$result, { movies, movies_page }, {}, {})}</div></div> <div class="swiper-pagination-vertical"></div></div>`;
});
export {
  Page as default
};
