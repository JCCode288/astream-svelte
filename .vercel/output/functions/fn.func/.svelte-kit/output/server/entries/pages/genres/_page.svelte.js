import { c as create_ssr_component, h as escape, v as validate_component, l as each } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const Genre_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { genre } = $$props;
  if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0)
    $$bindings.genre(genre);
  return `<a href="${"/genres/" + escape(genre.id, true)}">${validate_component(Button, "Button").$$render($$result, { color: "green" }, {}, {
    default: () => {
      return `${escape(genre.title)}`;
    }
  })}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let genres;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  genres = data.genres;
  return `${$$result.head += `<!-- HEAD_svelte-1wb1lsn_START -->${$$result.title = `<title>Anime Genres</title>`, ""}<meta name="description" content="All list of anime genres in Astreamline website"><meta name="keywords" content="animes, genres, all genres"><!-- HEAD_svelte-1wb1lsn_END -->`, ""} <div class="flex max-h-full flex-col"><h1 data-svelte-h="svelte-2by0at">All Genres</h1> <div class="relative my-4 flex flex-wrap gap-x-4 gap-y-6 overflow-y-auto px-8 py-4">${each(genres, (genre) => {
    return `${validate_component(Genre_button, "GenreButton").$$render($$result, { genre }, {}, {})}`;
  })}</div></div>
e`;
});
export {
  Page as default
};
