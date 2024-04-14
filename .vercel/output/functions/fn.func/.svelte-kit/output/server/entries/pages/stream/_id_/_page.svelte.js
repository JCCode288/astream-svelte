import { c as create_ssr_component, p as onDestroy, f as add_attribute, h as escape, v as validate_component } from "../../../../chunks/ssr.js";
import "hls.js";
import "artplayer";
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sourcesData } = $$props;
  let streamDiv;
  onDestroy(() => {
  });
  if ($$props.sourcesData === void 0 && $$bindings.sourcesData && sourcesData !== void 0)
    $$bindings.sourcesData(sourcesData);
  return `<div class="artplayer-app rounded-sm bg-blend-screen shadow-sm ring-2 ring-offset-[2.5rem]" style="aspect-ratio: 16/9;width: 85%;height: auto;margin-left: auto;margin-right: auto;"${add_attribute("this", streamDiv, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sourcesData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  sourcesData = data.sourcesData;
  return `${$$result.head += `<!-- HEAD_svelte-wkpmfo_START -->${$$result.title = `<title>Streaming Anime - ${escape(data.anime.title)} Episode ${escape(data.curEps)}</title>`, ""}<meta name="description"${add_attribute("content", data.anime.description, 0)}><meta name="keywords"${add_attribute("content", `Streaming Online, ${data.anime.title} Episode ${data.curEps}, No Ads`, 0)}><!-- HEAD_svelte-wkpmfo_END -->`, ""} <h1>${escape(data.anime.title)} Episode ${escape(data.curEps)}</h1> ${validate_component(Player, "Player").$$render($$result, { sourcesData }, {}, {})}`;
});
export {
  Page as default
};
