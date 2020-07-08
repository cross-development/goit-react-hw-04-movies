const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';
const baseURL = 'https://api.themoviedb.org/3';

const fetchMoviesByQuery = searchQuery => {
	return fetch(
		`${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
	)
		.then(response => response.json())
		.then(data => data.results);
};

const fetchMoviesDetails = movieId => {
	return fetch(`${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(response =>
		response.json(),
	);
};

const fetchMoviesByCast = movieId => {
	return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(response =>
		response.json(),
	);
};

const fetchMoviesReviews = movieId => {
	return fetch(
		`${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
	).then(response => response.json());
};

export default {
	fetchMoviesByQuery,
	fetchMoviesDetails,
	fetchMoviesByCast,
	fetchMoviesReviews,
};

// const trendingMovies =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=9e07f05bee226a5aad11e2f836e260f9';
// const searchMovies =
// 	'https://api.themoviedb.org/3/search/movie?api_key=9e07f05bee226a5aad11e2f836e260f9&language=en-US&query=batman&page=1&include_adult=false';
// const moviesDetails =
// 	'https://api.themoviedb.org/3/movie/123?api_key=9e07f05bee226a5aad11e2f836e260f9&language=en-US';
// const moviesCast =
// 	'https://api.themoviedb.org/3/movie/123/credits?api_key=9e07f05bee226a5aad11e2f836e260f9';
// const moviesReviews =
// 	'https://api.themoviedb.org/3/movie/550/reviews?api_key=9e07f05bee226a5aad11e2f836e260f9&language=en-US&page=1';
