import * as server from '../entries/pages/genres/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/genres/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/genres/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BYJERVMj.js","_app/immutable/chunks/scheduler.DdVwomBZ.js","_app/immutable/chunks/index.Z035ytyj.js","_app/immutable/chunks/Button.Cf5DJGQx.js","_app/immutable/chunks/bundle-mjs.CkgsDLdl.js"];
export const stylesheets = [];
export const fonts = [];
