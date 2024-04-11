<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment"; // Import browser environment variable
	import { generateOpts } from "../../../utils/video-player..config";
	import type Artplayer from "artplayer";
	import type { IGenerateOpts } from "$lib/interfaces/video.interface";

	export let sourcesData: Omit<IGenerateOpts, "div">;

	let streamDiv: HTMLDivElement;
	let art: Artplayer;

	onMount(async () => {
		if (browser) {
			const config = generateOpts({ ...sourcesData, div: streamDiv });
			// Import Artplayer only on the client-side
			const Artplayer = await import("artplayer").then((module) => module.default);
			art = new Artplayer({ ...config });

			art.on("resize", () => {
				art.subtitle.style({
					fontSize: art.height * 0.05 + "px"
				});
			});

			art.on("subtitleUpdate", (text) => {
				art.template.$subtitle.innerHTML = text;
			});

			art.on("destroy", () => {
				art.hls.destroy();
			});
		}
	});

	onDestroy(() => {
		if (art && art.hls) {
			art.hls.destroy();
		}
	});
</script>

<div
	bind:this={streamDiv}
	class="artplayer-app"
	style="aspect-ratio: 16/9;width: 85%;height: auto;margin-left: auto;margin-right: auto;"
></div>
