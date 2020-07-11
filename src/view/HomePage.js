//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
//Routes
import routes from '../routes';
//Styles
import styles from './MoviesPage.module.css';

//TODO: вынести список и айтемы в отдельный компонент

export default class HomePage extends Component {
	state = {
		movies: [],
		error: null,
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });

		movieApi
			.fetchTrendMovies()
			.then(movies => this.setState({ movies }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	render() {
		const { movies, error, loading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{movies.length > 0 && (
					<ul className={styles.movieList}>
						{movies.map(movie => (
							<li className={styles.movieItem} key={movie.id}>
								<Link
									className={styles.movieItemLink}
									to={{
										pathname: `${routes.movies}/${movie.id}`,
										state: { from: this.props.location },
									}}
								>
									<img
										className={styles.movieItemImage}
										src={`${getPosterUrl}${movie.poster_path}`}
										alt={movie.title || movie.name}
									/>
									{movie.title || movie.name}
								</Link>
								<span className={styles.movieVote}>{movie.vote_average}</span>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}
