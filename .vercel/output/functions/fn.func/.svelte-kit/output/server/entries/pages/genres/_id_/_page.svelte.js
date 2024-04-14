import { c as create_ssr_component, k as subscribe, h as escape, v as validate_component, f as add_attribute, l as each } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import "swiper";
import { R as Reels, s as swiperClass, A as Ani_card } from "../../../../chunks/ani-card.js";
import { p as page } from "../../../../chunks/stores.js";
const capitalizeTitle = (title) => title.charAt(0).toUpperCase() + title.slice(1);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let genres;
  let title;
  let genre_page;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  genres = data.genres;
  title = capitalizeTitle(data.title);
  genre_page = 1;
  $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-l0n02y_START -->${$$result.title = `<title>Astreamline anime genre - ${escape(title)}</title>`, ""}<meta name="description" content="${"All anime list from genre " + escape(title, true)}"><meta name="keywords" content="${"anime, genre, " + escape(title, true)}"><!-- HEAD_svelte-l0n02y_END -->`, ""} <div class="flex h-full flex-col justify-between"><h2 class="mx-8 mt-8 text-4xl font-bold text-red-700">Genre ${escape(title)}</h2> <div class="relative flex h-fit flex-col">${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})} <div${add_attribute("class", swiperClass.GENRE, 0)}><div class="swiper-wrapper">${each(genres.results, (anime) => {
    return `<div class="swiper-slide">${validate_component(Ani_card, "AniCard").$$render($$result, { anime }, {}, {})} </div>`;
  })}</div></div> ${validate_component(Reels, "Reels").$$render($$result, {}, {}, {})}</div> <div class="relative bottom-8 flex w-screen justify-center gap-2 text-nowrap">${validate_component(Button, "Button").$$render($$result, { disabled: genre_page > 1 ? false : true }, {}, {
    default: () => {
      return `Prev Page`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: genres.hasNextPage ? false : true
    },
    {},
    {
      default: () => {
        return `Next Page`;
      }
    }
  )}</div></div>`;
});
export {
  Page as default
};
