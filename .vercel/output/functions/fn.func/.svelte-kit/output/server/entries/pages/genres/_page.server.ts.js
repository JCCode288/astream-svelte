import { P as Provider } from "../../../chunks/index3.js";
function load() {
  return Provider.allGenres().then((genres) => ({ genres }));
}
export {
  load
};
