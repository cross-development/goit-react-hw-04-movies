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

const App = () => {
	return (
		<Layout>
			<Navigation />

			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/movies" component={MoviesPage} />
				<Route path="/movies/:movieId" component={MovieDetailsPage} />
				<Route path="/movies/:movieId/cast" component={Cast} />
				<Route path="/movies/:movieId/reviews" component={Reviews} />
				<Route component={HomePage} />
			</Switch>
		</Layout>
	);
};

export default App;

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// '/movies/:movieId/cast' - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// '/movies/:movieId/reviews' - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
