import * as server from '../entries/pages/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CdH2AjSd.js","_app/immutable/chunks/scheduler.DdVwomBZ.js","_app/immutable/chunks/index.Z035ytyj.js","_app/immutable/chunks/control.Bl8ay-uf.js","_app/immutable/chunks/Button.Cf5DJGQx.js","_app/immutable/chunks/bundle-mjs.CkgsDLdl.js","_app/immutable/chunks/ani-card.BVMSqAX7.js","_app/immutable/chunks/swiper-core.C8kc6biT.js"];
export const stylesheets = [];
export const fonts = [];
