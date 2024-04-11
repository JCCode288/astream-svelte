import { Provider } from "$lib";

export function load({ params }) {
	const id = params?.id;

	if (!id) throw new Error("No id provided");

	return Provider.detail(id);
}
