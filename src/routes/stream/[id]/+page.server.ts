import { Provider } from "$lib";
import type { IVideoQuality } from "$lib/interfaces/video.interface.js";
import type { IError } from "../../../interfaces/error.interface.js";

export async function load({ params }) {
	let count = 0;
	let data;
	while (count < 5) {
		try {
			const id = params?.id;

			if (!id) throw new Error("No id provided");

			const streamData = await Provider.stream(atob(id));
			const { headers, sources, animeId, prev, next, subtitles } = streamData;

			if (!sources || !sources.length) throw new Error("No stream data");

			const currentSource = sources.find((src) => src.quality === "default");

			const qualities: IVideoQuality[] = sources?.map((src) => {
				let defaultProp: boolean = false;
				const html = src.quality ?? "no html";
				if (src.quality === "default") {
					defaultProp = true;
				}

				const url = src.url ?? "no url";

				return { default: defaultProp, html, url };
			});

			const currentSubs = subtitles?.find((sub) => sub.lang === "english")?.url;

			data = {
				headers,
				sources,
				animeId,
				prev,
				next,
				subtitles,
				sourcesData: {
					currentSource,
					qualities,
					currentSubs
				}
			};

			break;
		} catch (err) {
			const message: string = (err as IError).message;
			if (message?.includes("character")) throw err;
			if (count >= 5) throw err;
		}
		count++;
	}
	if (!data) throw new Error("No data");
	return data;
}
