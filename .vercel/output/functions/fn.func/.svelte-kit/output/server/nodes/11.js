import * as server from '../entries/pages/stream/_id_/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stream/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/stream/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.BD3Ukfm-.js","_app/immutable/chunks/scheduler.DdVwomBZ.js","_app/immutable/chunks/index.Z035ytyj.js"];
export const stylesheets = [];
export const fonts = [];
