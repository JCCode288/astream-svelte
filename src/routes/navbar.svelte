<script lang="ts">
	import { Input } from "flowbite-svelte";
	import { ListMusicSolid, HomeSolid, SearchOutline } from "flowbite-svelte-icons";
	import { debounce } from "../utils/debouncer";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { BottomNav, BottomNavItem, Popover } from "flowbite-svelte";

	$: activeUrl = $page.url.pathname;

	const debouncer = debounce(300);

	const handleSearch = (ev: Event) => {
		const debouncing = (e: Event) =>
			debouncer(() => {
				const value = (e.target as HTMLInputElement)?.value;

				if (!value || !value.length) return goto("/");

				return goto("/search?q=" + value, { keepFocus: true });
			});

		ev.target?.addEventListener("keypress", debouncing);

		return () => {
			ev.target?.removeEventListener("keypress", debouncing);
		};
	};
</script>

<BottomNav
	{activeUrl}
	position="sticky"
	classInner="flex justify-center"
	classActive="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300"
>
	<BottomNavItem btnName="Home" href="/">
		<HomeSolid />
	</BottomNavItem>
	<BottomNavItem btnName="Genres" href="/genres">
		<ListMusicSolid />
	</BottomNavItem>
	<BottomNavItem class="relative max-w-sm cursor-none md:block" btnName="Search">
		<SearchOutline />
		<Popover>
			<Input on:focus={handleSearch} id="search-navbar" class="ps-5" placeholder="Search Animes" />
		</Popover>
	</BottomNavItem>
</BottomNav>
