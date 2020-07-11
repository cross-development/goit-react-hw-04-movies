//Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Views
import HomePage from '../../view/HomePage';
import MoviesPage from '../../view/MoviesPage';
import MovieDetailsPage from '../../view/MovieDetailsPage';

import NotFound from '../../view/NotFound';
//Components
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
//Routes
import routes from '../../routes';

const App = () => {
	return (
		<>
			<Layout>
				<Header />
				<Switch>
					<Route path={routes.home} exact component={HomePage} />
					<Route path={routes.movieDetails} component={MovieDetailsPage} />
					<Route path={routes.movies} component={MoviesPage} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</>
	);
};

export default App;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// '/movies/:movieId/cast' - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// '/movies/:movieId/reviews' - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
