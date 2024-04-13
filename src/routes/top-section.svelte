<script lang="ts">
	import { Button } from "flowbite-svelte";
	import AniCard from "./ani-card.svelte";
	import { handleUpdate } from "../utils/data.update";
	import type { IAnimeResult, ISearch } from "@consumet/extensions";
	import type { Writable } from "svelte/store";

	export let top: Writable<ISearch<IAnimeResult>>;
	export let top_page: Writable<number>;

	const handleNextTop = async () => {
		top_page.update((val) => val + 1);
		handleUpdate({ data_var: top, page_var: top_page, url: "?/top" });
	};
	const handlePrevTop = async () => {
		top_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: top, page_var: top_page, url: "?/top" });
	};
</script>

<div class="flex flex-col relative">
	<h2 class="text-4xl font-bold text-red-700">Top</h2>
	<div>
		{#each $top.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $top_page > 1}
			<Button on:click={() => handlePrevTop()}>Prev Page</Button>
		{/if}
		{#if $top.hasNextPage}
			<Button on:click={() => handleNextTop()}>Next Page</Button>
		{/if}
	</div>
</div>
