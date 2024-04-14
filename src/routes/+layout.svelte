<script>
	import Navbar from "./navbar.svelte";
	import "../app.pcss";
	import { register } from "swiper/element";
	import { onMount } from "svelte";
	import "swiper/css/bundle";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import Loading from "$lib/loading.svelte";

	$: route_loading = false;

	onMount(() => {
		register();
	});

	beforeNavigate(() => (route_loading = true));
	afterNavigate(() => (route_loading = false));
</script>

<div class="h-screen w-screen overflow-hidden">
	{#if route_loading}
		<Loading />
	{:else}
		<div class="flex h-[93svh]">
			<slot />
		</div>
	{/if}
	<div class="relative bottom-0">
		<Navbar />
	</div>
</div>
