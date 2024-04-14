<script>
	import Navbar from "./navbar.svelte";
	import "../app.pcss";
	import { register } from "swiper/element";
	import { onMount } from "svelte";
	import "swiper/css/bundle";

	onMount(() => {
		register();
	});
</script>

<div class="h-screen max-w-[100%] overflow-hidden">
	<div class="flex h-[93svh]">
		<slot />
	</div>
	<Navbar />
</div>
