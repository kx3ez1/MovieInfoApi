import { addCORSHeaders } from './utils';

const trendingDay = '/trending/movie/day?language=en-US';
const trendingWeek = '/trending/movie/week?language=en-US';

export const handleTrendingDay = async (request, env, ctx) => {
	const url = new URL(request.url);
	const queryParams = url.searchParams;
	let page = queryParams.get('page');
	if(page === null || page === '' || page === undefined || page === 'undefined' || page === 'null' || page === '0') {
		page = 1;
	}
	const resp = await fetch(env.API_URL + trendingDay + '&api_key=' + env.API_KEY + '&page=' + page);
	const data = await resp.json();
	let resp2 =  new Response(JSON.stringify(data), {
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			}
		}
	);
	addCORSHeaders(resp2);
	return resp2;
};

export const handleTrendingWeek = async (request, env, ctx) => {
	const url = new URL(request.url);
	const queryParams = url.searchParams;
	let page = queryParams.get('page');
	if(page === null || page === '' || page === undefined || page === 'undefined' || page === 'null' || page === '0') {
		page = 1;
	}
	const resp = await fetch(env.API_URL + trendingWeek + '&api_key=' + env.API_KEY + '&page=' + page);
	const data = await resp.json();
	let resp2 =  new Response(JSON.stringify(data), {
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			}
		}
	);
	addCORSHeaders(resp2);
	return resp2;
};

export const handleGetMovieDetails = async (request, env, ctx) => {
	const url = new URL(request.url);
	const queryParams = url.searchParams;
	const movieId = queryParams.get('id');
	const resp = await fetch(env.API_URL + '/movie/' + movieId + '?api_key=' + env.API_KEY);
	const data = await resp.json();
	let resp2 =  new Response(JSON.stringify(data), {
			headers: {
				'content-type': 'application/json;charset=UTF-8'
			}
		}
	);
	addCORSHeaders(resp2);
	return resp2;
}
