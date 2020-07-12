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
