<script lang="ts">
	import type { IMainPage } from "$lib/interfaces/provider.interface";
	import { Button } from "flowbite-svelte";
	import { handleUpdate } from "../utils/data.update";
	import AniCard from "./AniCard.svelte";
	import EpsCard from "./EpsCard.svelte";
	import { writable } from "svelte/store";
	import RecentSection from "./recent-section.svelte";
	import TopSection from "./top-section.svelte";
	import PopularSection from "./popular-section.svelte";
	import MoviesSection from "./movies-section.svelte";

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
</script>

<svelte:head>
	<title>Astreamline - streaming online</title>
	<meta name="description" content="Streaming anime online with no ads" />
	<meta name="keywords" content="Anime, Streaming, Online, No Ads" />
</svelte:head>

<RecentSection {recent} {recent_page} />

<TopSection {top} {top_page} />

<PopularSection {popular} {popular_page} />

<MoviesSection {movies} {movies_page} />
