<script lang="ts">
	import { Button } from "flowbite-svelte";
	import EpsCard from "./EpsCard.svelte";
	import type { IAnimeResult, ISearch } from "@consumet/extensions";
	import type { Writable } from "svelte/store";
	import { handleUpdate } from "../utils/data.update";

	export let recent: Writable<ISearch<IAnimeResult>>;
	export let recent_page: Writable<number>;

	const handleNextRecent = async () => {
		recent_page.update((val) => val + 1);
		handleUpdate({ data_var: recent, page_var: recent_page, url: "?/recent" });
	};
	const handlePrevRecent = async () => {
		recent_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: recent, page_var: recent_page, url: "?/recent" });
	};
</script>

<div class="flex flex-col relative">
	<h2 class="text-4xl font-bold text-red-700">Recent</h2>
	<div class="flex flex-wrap gap-y-8 gap-x-4">
		{#each $recent.results as anime}
			<EpsCard {anime} />
		{/each}
	</div>
	<div>
		{#if $recent_page > 1}
			<Button on:click={() => handlePrevRecent()}>Prev Page</Button>
		{/if}
		{#if $recent.hasNextPage}
			<Button on:click={() => handleNextRecent()}>Next Page</Button>
		{/if}
	</div>
</div>
