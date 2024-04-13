<script lang="ts">
	import type { IMainPage } from "$lib/interfaces/provider.interface";
	import { writable } from "svelte/store";
	import RecentSection from "./recent-section.svelte";
	import TopSection from "./top-section.svelte";
	import PopularSection from "./popular-section.svelte";
	import MoviesSection from "./movies-section.svelte";
	import { onMount } from "svelte";
	import Swiper from "swiper";
	import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper/modules";
	import { VERTICAL_CONFIG } from "$lib/swiper.config";

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
	onMount(() => {
		var vertical_swiper = new Swiper(".verSwiper", VERTICAL_CONFIG);
	});
</script>

<svelte:head>
	<title>Astreamline - streaming online</title>
	<meta name="description" content="Streaming anime online with no ads" />
	<meta name="keywords" content="Anime, Streaming, Online, No Ads" />
</svelte:head>

<div class="verSwiper max-h-[90vh] overflow-hidden">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<RecentSection {recent} {recent_page} />
		</div>
		<div class="swiper-slide">
			<TopSection {top} {top_page} />
		</div>
		<div class="swiper-slide">
			<PopularSection {popular} {popular_page} />
		</div>
		<div class="swiper-slide">
			<MoviesSection {movies} {movies_page} />
		</div>
	</div>
	<div class="swiper-pagination-vertical" />
</div>
