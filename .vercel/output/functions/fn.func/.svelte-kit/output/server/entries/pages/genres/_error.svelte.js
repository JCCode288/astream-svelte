import { c as create_ssr_component, k as subscribe, h as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message;
  let status;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.error);
  message = $page.error?.message ?? "Something happened";
  status = $page.status;
  $$unsubscribe_page();
  return `<h1>${escape(status)}:${escape(message)}</h1>`;
});
export {
  Error as default
};
