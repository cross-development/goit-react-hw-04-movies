//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
// import MoviesList from '../components/MoviesList/MoviesList';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../assets/default_poster.jpg';
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
				{/* {!loading && movies.length > 0 && <MoviesList moviesData={movies} />} */}

				{!loading && movies.length > 0 && (
					<ul className={styles.movieList}>
						{movies.map(({ id, poster_path, name, title, vote_average }) => (
							<li className={styles.movieItem} key={id}>
								<Link
									className={styles.movieItemLink}
									to={{
										pathname: `${routes.movies}/${id}`,
										// state: { from: this.props.location },
									}}
								>
									<img
										className={styles.movieItemImage}
										src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
										alt={name || title}
									/>
									<span>{name || title}</span>
								</Link>
								<span className={styles.movieVote}>{vote_average}</span>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}
