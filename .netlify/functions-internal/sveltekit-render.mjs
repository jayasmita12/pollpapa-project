import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.65ae70f8.js","imports":["_app/immutable/entry/start.65ae70f8.js","_app/immutable/chunks/index.523be208.js","_app/immutable/chunks/singletons.53f803e4.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.067d3f2c.js","imports":["_app/immutable/entry/app.067d3f2c.js","_app/immutable/chunks/index.523be208.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
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
});
