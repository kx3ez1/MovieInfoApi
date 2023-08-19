
export const handleNotFound = async (request, env, ctx) => {
	return new Response('Not found', { status: 404 });
}
