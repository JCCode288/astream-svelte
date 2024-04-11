import { type Writable } from "svelte/store";

export function watch<T>(deps: Writable<T>[], fn: () => void) {
	deps.forEach((dep) => dep?.subscribe(fn));
}
