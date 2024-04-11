<script lang="ts">
	import type { IAnimeResult } from "@consumet/extensions";

	export let anime: IAnimeResult;
	const detailUrl = `detail/${anime.id}`;
</script>

<div>
	<a href={detailUrl}>
		{JSON.stringify(anime)}
	</a>
</div>
