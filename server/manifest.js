const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C6CjkWPg.js","app":"_app/immutable/entry/app.BXqxvXIU.js","imports":["_app/immutable/entry/start.C6CjkWPg.js","_app/immutable/chunks/scheduler.DNfKYjoR.js","_app/immutable/chunks/index.viIURbgh.js","_app/immutable/entry/app.BXqxvXIU.js","_app/immutable/chunks/scheduler.DNfKYjoR.js","_app/immutable/chunks/index.DNtWZaPt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-YJYbGC3V.js')),
			__memo(() => import('./chunks/1-BowXWUcZ.js')),
			__memo(() => import('./chunks/2-CBAVDDyx.js')),
			__memo(() => import('./chunks/3-CZjZsc4P.js')),
			__memo(() => import('./chunks/4-Dsdm2ozl.js')),
			__memo(() => import('./chunks/5-8nwSSId3.js')),
			__memo(() => import('./chunks/6-E7e7JXiG.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/docs/components/button",
				pattern: /^\/docs\/components\/button\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
