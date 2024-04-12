<script lang="ts">
	import { Button } from "flowbite-svelte";
	import AniCard from "./AniCard.svelte";
	import { handleUpdate } from "../utils/data.update";
	import type { IAnimeResult, ISearch } from "@consumet/extensions";
	import type { Writable } from "svelte/store";

	export let popular: Writable<ISearch<IAnimeResult>>;
	export let popular_page: Writable<number>;

	const handleNextPopular = async () => {
		popular_page.update((val) => val + 1);
		handleUpdate({ data_var: popular, page_var: popular_page, url: "?/popular" });
	};
	const handlePrevPopular = async () => {
		popular_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: popular, page_var: popular_page, url: "?/popular" });
	};
</script>

<div class="flex flex-col relative">
	<h2 class="text-4xl font-bold text-red-700">Popular</h2>
	<div>
		{#each $popular.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $popular_page > 1}
			<Button on:click={() => handlePrevPopular()}>Prev Page</Button>
		{/if}
		{#if $popular.hasNextPage}
			<Button on:click={() => handleNextPopular()}>Next Page</Button>
		{/if}
	</div>
</div>
