//Core
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
//Components
import Layout from '../Layout';
import Header from '../Header';
import Loader from '../Loader';
//Routes
import routes from '../../routes';
//Services
import asyncComponents from '../../services/asyncComponents';

const App = () => (
	<Layout>
		<Header />

		<Suspense fallback={<Loader onLoad={true} />}>
			<Switch>
				<Route path={routes.home} exact component={asyncComponents.HomePage} />
				<Route path={routes.movieDetails} component={asyncComponents.MovieDetailsPage} />
				<Route path={routes.movies} component={asyncComponents.MoviesPage} />
				<Route component={asyncComponents.NotFoundPage} />
			</Switch>
		</Suspense>
	</Layout>
);

export default App;
