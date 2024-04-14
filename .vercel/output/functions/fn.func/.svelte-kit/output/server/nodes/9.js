import * as server from '../entries/pages/genres/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/genres/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/genres/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.DQQNVVd2.js","_app/immutable/chunks/scheduler.DdVwomBZ.js","_app/immutable/chunks/index.Z035ytyj.js","_app/immutable/chunks/Button.Cf5DJGQx.js","_app/immutable/chunks/bundle-mjs.CkgsDLdl.js","_app/immutable/chunks/swiper-core.C8kc6biT.js","_app/immutable/chunks/ani-card.BVMSqAX7.js","_app/immutable/chunks/entry.oKKfPan1.js","_app/immutable/chunks/control.Bl8ay-uf.js","_app/immutable/chunks/stores.BRSyF36W.js"];
export const stylesheets = [];
export const fonts = [];
