import { Provider } from "$lib";
import { redirect } from "@sveltejs/kit";

export function load({ url }) {
	const query = url.searchParams.get("q") ?? "";
	if (!query || !query.length) redirect(301, "/");

	const pageQuery = url.searchParams.get("p") ?? "";
	const page = !isNaN(+pageQuery) ? +pageQuery : undefined;

	return Provider.search(query, page);
}
