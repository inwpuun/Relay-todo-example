import type React from 'react';
import type { LoaderFunction, RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const pages = import.meta.glob<{ default: React.ComponentType }>(
	'./app/**/page.tsx'
);
const loaders = import.meta.glob<{ default: LoaderFunction }>(
	'./app/**/loader.ts',
	{ eager: true }
);
const errors = import.meta.glob<{ default: React.ReactNode }>(
	'./app/**/error.tsx',
	{ eager: true }
);

const routes: RouteObject[] = [
	{
		path: '/',
		lazy: async () => {
			const { default: Component } = await pages['./app/page.tsx']();
			return { Component };
		},
		loader: loaders['./app/loader.ts']?.default,
		errorElement: errors['./app/error.tsx']?.default,
	},
];

Object.keys(pages).forEach((path) => {
	if (Object.prototype.hasOwnProperty.call(pages, path)) {
		const rawRoute = path.match(/\.\/app\/(.*)\/page\.tsx$/)?.[1];
		let route = rawRoute;
		if (route) {
			const params = route.match(/\[(\w+)\]/g);
			if (params) {
				params.forEach((param) => {
					route = route?.replace(param, `:${param.slice(1, -1)}`);
				});
			}
			routes.push({
				path: `/${route}`,
				lazy: async () => {
					const { default: Component } = await pages[path]();
					return { Component };
				},
				loader: loaders[`./app/${rawRoute}/loader.ts`]?.default,
				errorElement: errors[`./app/${rawRoute}/error.tsx`]?.default,
			});
		}
	}
});

routes.push({
	path: '/*',
	lazy: async () => {
		const module = await import('./app/404.tsx');
		const Component = module.default as React.ComponentType;
		return { Component };
	},
});

export const router = createBrowserRouter(routes);
