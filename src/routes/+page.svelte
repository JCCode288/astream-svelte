<script lang="ts">
	import type { IMainPage } from "$lib/interfaces/provider.interface";
	import { Button } from "flowbite-svelte";
	import { handleUpdate } from "../utils/data.update";
	import AniCard from "./AniCard.svelte";
	import EpsCard from "./EpsCard.svelte";
	import { writable } from "svelte/store";

	export let data: IMainPage;

	// page states
	const recent = writable(data.recent);
	const top = writable(data.top);
	const popular = writable(data.popular);
	const movies = writable(data.movies);

	const recent_page = writable(data.recent.currentPage);
	const top_page = writable(data.top.currentPage);
	const popular_page = writable(data.popular.currentPage);
	const movies_page = writable(data.movies.currentPage);

	$: {
		// data reactivity
		recent;
		top;
		popular;
		movies;

		// page reactivity
		recent_page;
		top_page;
		popular_page;
		movies_page;
	}

	//page handlers
	const handleNextRecent = async () => {
		recent_page.update((val) => val + 1);
		handleUpdate({ data_var: recent, page_var: recent_page, url: "?/recent" });
	};
	const handlePrevRecent = async () => {
		recent_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: recent, page_var: recent_page, url: "?/recent" });
	};
	const handleNextTop = async () => {
		top_page.update((val) => val + 1);
		handleUpdate({ data_var: top, page_var: top_page, url: "?/top" });
	};
	const handlePrevTop = async () => {
		top_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: top, page_var: top_page, url: "?/top" });
	};
	const handleNextPopular = async () => {
		popular_page.update((val) => val + 1);
		handleUpdate({ data_var: popular, page_var: popular_page, url: "?/popular" });
	};
	const handlePrevPopular = async () => {
		popular_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: popular, page_var: popular_page, url: "?/popular" });
	};
	const handleNextMovies = async () => {
		movies_page.update((val) => val + 1);
		handleUpdate({ data_var: movies, page_var: movies_page, url: "?/movies" });
	};
	const handlePrevMovies = async () => {
		movies_page.update((val) => (val > 1 ? val - 1 : 1));
		handleUpdate({ data_var: movies, page_var: movies_page, url: "?/movies" });
	};
</script>

<svelte:head>
	<title>Astreamline - streaming online</title>
	<meta name="description" content="Streaming anime online with no ads" />
	<meta name="keywords" content="Anime, Streaming, Online, No Ads" />
</svelte:head>

<div class="flex flex-col w-screen">
	<h2 class="text-4xl font-bold text-red-700">Recent</h2>
	<div>Page: {$recent_page}</div>
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
			<button on:click={() => handleNextRecent()}>Next Page</button>
		{/if}
	</div>
</div>
<div class="flex flex-col w-screen">
	<h2>Top</h2>
	<div>Page: {$top_page}</div>
	<div>
		{#each $top.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $top_page > 1}
			<button on:click={() => handlePrevTop()}>Prev Page</button>
		{/if}
		{#if $top.hasNextPage}
			<button on:click={() => handleNextTop()}>Next Page</button>
		{/if}
	</div>
</div>
<div class="flex flex-col w-screen">
	<h2>Popular</h2>
	<div>Page: {$popular_page}</div>
	<div>
		{#each $popular.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $popular_page > 1}
			<button on:click={() => handlePrevPopular()}>Prev Page</button>
		{/if}
		{#if $popular.hasNextPage}
			<button on:click={() => handleNextPopular()}>Next Page</button>
		{/if}
	</div>
</div>
<div class="flex flex-col w-screen">
	<h2>Movies</h2>
	<div>Page: {$movies_page}</div>
	<div>
		{#each $movies.results as anime}
			<AniCard {anime} />
		{/each}
	</div>
	<div>
		{#if $movies_page > 1}
			<button on:click={() => handlePrevMovies()}>Prev Page</button>
		{/if}
		{#if $movies.hasNextPage}
			<button on:click={() => handleNextMovies()}>Next Page</button>
		{/if}
	</div>
</div>
