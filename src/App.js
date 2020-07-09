//Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Views
import HomePage from './view/HomePage';
import MoviesPage from './view/MoviesPage';
import MovieDetailsPage from './view/MovieDetailsPage';
import Cast from './view/Cast';
import Reviews from './view/Reviews';
//Components
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
//Routes
import routes from './routes';

const App = () => {
	return (
		<>
			<Layout>
				<Navigation />
			</Layout>

			<Switch>
				<Route path={routes.home} exact component={HomePage} />
				<Route path={routes.movies} exact component={MoviesPage} />
				<Route path={routes.movieDetails} component={MovieDetailsPage} />
				<Route path={routes.movieCast} component={Cast} />
				<Route path={routes.movieReview} component={Reviews} />
				<Route component={HomePage} />
			</Switch>
		</>
	);
};

export default App;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// '/movies/:movieId/cast' - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// '/movies/:movieId/reviews' - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
