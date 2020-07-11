//Core
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//Components
import Cast from '../view/Cast';
import Reviews from '../view/Reviews';
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
//Routes
import routes from '../routes';
//Styles
import styles from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component {
	state = {
		movie: null,
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

	handleGoBack = () => {
		const { state } = this.props.location;

		return state && state.from
			? this.props.history.push(state.from)
			: this.props.history.push(routes.movies);
	};

	render() {
		const { movie, error, loading } = this.state;
		const { match } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				<div>
					{!loading && movie && (
						<>
							<div className={styles.buttonWrapper}>
								<button type="button" onClick={this.handleGoBack}>
									Go Back
								</button>
							</div>

							<div className={styles.movieWrapper}>
								<div className={styles.posterWrapper}>
									<img
										src={`${getPosterUrl}${movie.poster_path}`}
										alt={movie.title || movie.name}
									/>
								</div>

								<div className={styles.detailsWrapper}>
									<h1>
										{movie.title || movie.name} ({movie.release_date.slice(0, 4)})
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
												state: { from: this.props.location },
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
												state: { from: this.props.location },
											}}
											className={styles.additionalInfoLink}
											activeclassname={styles.additionalInfoLinkActive}
										>
											Reviews
										</Link>
									</li>
								</ul>

								<Switch>
									<Route path={`${match.path}/cast`} component={Cast} />
									<Route path={`${match.path}/reviews`} component={Reviews} />
								</Switch>
							</div>
						</>
					)}
				</div>
			</>
		);
	}
}
// fetchMoviesByCast
// fetchMoviesReviews
