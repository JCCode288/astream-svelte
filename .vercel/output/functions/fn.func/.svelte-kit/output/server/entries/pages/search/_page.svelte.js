import { c as create_ssr_component, h as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1eeplw3">Search Page</h1> <div>${escape(JSON.stringify(data))}</div>`;
});
export {
  Page as default
};
