<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from "flowbite-svelte";
	import { SearchOutline } from "flowbite-svelte-icons";
	import { debounce } from "../utils/debouncer";
	import { goto } from "$app/navigation";

	const debouncer = debounce(1200);

	const handleSearch = (ev: Event) => {
		const debouncing = (e: Event) =>
			debouncer(() => {
				const value = (e.target as HTMLInputElement)?.value;
				return goto("/search?q=" + value);
			});

		ev.target?.addEventListener("keypress", debouncing);

		return () => {
			ev.target?.removeEventListener("keypress", debouncing);
		};
	};
</script>

<Navbar>
	<NavBrand href="/">
		<img
			src="/images/flowbite-svelte-icon-logo.svg"
			class="me-3 h-6 sm:h-9"
			alt="Astreamline Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Astreamline</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button
			color="none"
			data-collapse-toggle="mobile-menu-3"
			aria-controls="mobile-menu-3"
			aria-expanded="false"
			class="md:hidden text-primary-50 dark:text-red-700 hover:bg-primary-400 dark:hover:bg-primary-900 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-700 rounded-lg text-sm p-2.5 me-1"
		>
			<SearchOutline class="w-5 h-5" />
		</Button>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
				<SearchOutline class="w-4 h-4" />
			</div>
			<Input on:focus={handleSearch} id="search-navbar" class="ps-10" placeholder="Search Animes" />
		</div>
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/genres">Genres</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
	</NavUl>
</Navbar>
