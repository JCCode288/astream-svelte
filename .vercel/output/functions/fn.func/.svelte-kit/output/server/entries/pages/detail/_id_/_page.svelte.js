import { c as create_ssr_component, h as escape, f as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ouezc7_START -->${$$result.title = `<title>Anime Detail - ${escape(data.title)}</title>`, ""}<meta name="description"${add_attribute("content", data.description, 0)}><meta name="keywords"${add_attribute("content", `${data.title}, ${data.genres?.join(", ")}, ${data.rating}`, 0)}><!-- HEAD_svelte-ouezc7_END -->`, ""} <h1 data-svelte-h="svelte-14gsh4m">Detail Page</h1> <div>${escape(JSON.stringify(data))}</div>`;
});
export {
  Page as default
};
