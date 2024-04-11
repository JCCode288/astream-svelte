<script lang="ts">
	import type { IAnimeResult } from "@consumet/extensions";

	export let anime: IAnimeResult;
	const streamUrl = `stream/${btoa(anime.id + "-episode-" + anime.episodeNumber)}`;
</script>

<div>
	<a href={streamUrl}>
		{JSON.stringify(anime)}
	</a>
</div>
