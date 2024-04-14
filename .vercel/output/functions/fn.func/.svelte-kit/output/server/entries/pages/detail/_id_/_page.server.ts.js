import { P as Provider } from "../../../../chunks/index3.js";
function load({ params }) {
  const id = params?.id;
  if (!id)
    throw new Error("No id provided");
  return Provider.detail(id);
}
export {
  load
};
