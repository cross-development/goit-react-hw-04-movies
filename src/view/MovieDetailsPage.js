//Core
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
//Views
import NotFound from '../view/NotFound';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
import getDefaultPoster from '../assets/default_poster.jpg';
//Routes
import routes from '../routes';
//Styles
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../view/Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() => import('../view/Reviews' /* webpackChunkName: "reviews-view"*/));
// const NotFound = lazy(() => import('../view/NotFound' /* webpackChunkName: "reviews-view"*/));

export default class MovieDetailsPage extends Component {
	state = {
		movie: '',
		error: null,
		loading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ loading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	//TODO: при нажатии кнопки возврат должен быть на страницу поиска фильмов или на главную, в зависимости откуда пришли
	handleGoBack = () => {
		const { location, history } = this.props;
		//! при переходе на Cast или Reviews возвращает на предыдущее место в истории. Скорее всего проблема в этом месте
		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, error, loading } = this.state;
		const { match } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{movie === null && <NotFound />}

				<div>
					{!loading && movie && (
						<>
							<div className={styles.buttonWrapper}>
								<button className={styles.goBackBtn} type="button" onClick={this.handleGoBack}>
									Go Back
								</button>
							</div>

							<div className={styles.movieWrapper}>
								<div className={styles.posterWrapper}>
									<img
										src={
											movie.poster_path ? `${getPosterUrl}${movie.poster_path}` : getDefaultPoster
										}
										alt={movie.title || movie.name}
									/>
								</div>

								<div className={styles.detailsWrapper}>
									<h1>
										{movie.title || movie.name} {movie.release_date.slice(0, 4)}
									</h1>
									<p>User Score: {Math.round(movie.popularity)}%</p>
									<h2>Overview</h2>
									<p>{movie.overview}</p>
									<h3>Genres</h3>
									<p>{movie.genres.map(({ name }) => `${name} `)}</p>
								</div>
							</div>

							<div>
								<h2>Additional information</h2>
								<ul className={styles.additionalInfoList}>
									<li className={styles.additionalInfoListItem}>
										<Link
											to={{
												pathname: `${match.url}/cast`,
												// state: { from: this.props.location },
											}}
											className={styles.additionalInfoLink}
											activeclassname={styles.additionalInfoLinkActive}
										>
											Cast
										</Link>
									</li>
									<li className={styles.additionalInfoListItem}>
										<Link
											to={{
												pathname: `${match.url}/reviews`,
												// state: { from: this.props.location },
											}}
											className={styles.additionalInfoLink}
											activeclassname={styles.additionalInfoLinkActive}
										>
											Reviews
										</Link>
									</li>
								</ul>

								<Suspense fallback={<Loader onLoad={loading} />}>
									<Switch>
										<Route path={`${match.path}/cast`} component={Cast} />
										<Route path={`${match.path}/reviews`} component={Reviews} />
									</Switch>
								</Suspense>
							</div>
						</>
					)}
				</div>
			</>
		);
	}
}
