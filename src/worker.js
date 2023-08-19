/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { handleNotFound } from './not-found.js';
import { handleRoot } from './welcome.js';
import { handleGetMovieDetails, handleTrendingDay, handleTrendingWeek } from './apiOne';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;

		// Define your routes and their corresponding handlers
		const routes = {
			'/': handleRoot,
			'/trending/day': handleTrendingDay,
			'/trending/week': handleTrendingWeek,
			'/movie': handleGetMovieDetails,
		};

		// Find the appropriate handler for the current route
		const handler = routes[path] || handleNotFound;

		return handler(request, env, ctx);
	}
};
