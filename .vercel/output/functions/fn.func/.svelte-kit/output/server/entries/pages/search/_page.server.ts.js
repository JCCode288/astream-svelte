import { P as Provider } from "../../../chunks/index3.js";
import { r as redirect } from "../../../chunks/index.js";
function load({ url }) {
  const query = url.searchParams.get("q") ?? "";
  if (!query || !query.length)
    redirect(301, "/");
  const pageQuery = url.searchParams.get("p") ?? "";
  const page = !isNaN(+pageQuery) ? +pageQuery : void 0;
  return Provider.search(query, page);
}
export {
  load
};
