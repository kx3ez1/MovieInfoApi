function addCORSHeaders(response) {
	response.headers.set('Access-Control-Allow-Origin', '*');
	// You can also set other CORS headers like 'Access-Control-Allow-Methods' and 'Access-Control-Allow-Headers' here
}

export {
	addCORSHeaders
}
