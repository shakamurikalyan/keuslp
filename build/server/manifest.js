const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f12c8951.js","imports":["_app/immutable/start-f12c8951.js","_app/immutable/chunks/index-73212ea0.js","_app/immutable/chunks/singletons-6d4d38ed.js","_app/immutable/chunks/index-e7c93ec8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-8333a7e0.js'),
			() => import('./chunks/1-e3c8b783.js'),
			() => import('./chunks/2-b725d157.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
