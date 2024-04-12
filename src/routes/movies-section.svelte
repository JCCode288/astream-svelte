<script lang="ts">
	import { Button } from "flowbite-svelte";
	import AniCard from "./AniCard.svelte";
	import { handleUpdate } from "../utils/data.update";
	import type { IAnimeResult, ISearch } from "@consumet/extensions";
	import type { Writable } from "svelte/store";

	export let movies: Writable<ISearch<IAnimeResult>>;
	export let movies_page: Writable<number>;

	const handleNextMovies = async () => {
		movies_page.update((val) => val + 1);
		handleUpdate({ data_var: movies, page_var: movies_page, url: "?/movies" });
	};
	const handlePrevMovies = async () => {
		movies_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: movies, page_var: movies_page, url: "?/movies" });
	};
</script>

<div class="flex flex-col relative">
	<h2 class="text-4xl font-bold text-red-700">Movies</h2>
	<div>
		{#each $movies.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $movies_page > 1}
			<Button on:click={() => handlePrevMovies()}>Prev Page</Button>
		{/if}
		{#if $movies.hasNextPage}
			<Button on:click={() => handleNextMovies()}>Next Page</Button>
		{/if}
	</div>
</div>
