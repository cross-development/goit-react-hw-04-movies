export default {
	home: '/',
	movies: '/movies',
	movieDetails: '/movies/:movieId',
	movieCast: '/movies/:movieId/cast',
	movieReview: '/movies/:movieId/reviews',
};

// import { lazy } from 'react';

// export default [
// 	{
// 		path: '/',
// 		label: 'HomePage',
// 		exact: true,
// 		component: lazy(() => import('./view/HomePage' /* webpackChunkName: "home-page-view" */)),
// 	},
// 	{
// 		path: '/movies',
// 		label: 'MoviesPage',
// 		exact: true,
// 		component: lazy(() => import('./view/MoviesPage' /* webpackChunkName: "movies-page-view" */)),
// 	},
// 	{
// 		path: '/movies/:movieId',
// 		label: 'MovieDetailsPage',
// 		exact: true,
// 		component: lazy(() =>
// 			import('./view/MovieDetailsPage' /* webpackChunkName: "movies-page-details-view" */),
// 		),
// 	},
// 	{
// 		path: '/movies/:movieId/cast',
// 		label: 'Cast',
// 		exact: true,
// 		component: lazy(() => import('./view/Cast' /* webpackChunkName: "movies-page-cast-view" */)),
// 	},
// 	{
// 		path: '/movies/:movieId/reviews',
// 		label: 'Reviews',
// 		exact: true,
// 		component: lazy(() =>
// 			import('./view/Reviews' /* webpackChunkName: "movies-page-review-view" */),
// 		),
// 	},
// ];
