import { P as Provider } from "../../../../chunks/index3.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  let count = 0;
  let data;
  while (count < 5) {
    try {
      const id = params?.id;
      if (!id)
        throw new Error("No id provided");
      const streamData = await Provider.stream(atob(id));
      const { headers, sources, anime, prev, next, subtitles, curEps } = streamData;
      if (!sources || !sources.length)
        throw new Error("No stream data");
      const currentSource = sources.find((src) => src.quality === "default");
      const qualities = sources?.map((src) => {
        let defaultProp = false;
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
        prev,
        anime,
        next,
        subtitles,
        curEps,
        sourcesData: {
          currentSource,
          qualities,
          currentSubs
        }
      };
      break;
    } catch (err) {
      const message = err.message;
      if (message?.includes("character"))
        throw err;
      if (count >= 5)
        throw err;
    }
    count++;
  }
  if (!data)
    error(503, "Something happened");
  return data;
}
export {
  load
};
