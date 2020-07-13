//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components
import Notification from '../components/Notification/Notification';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
// import MoviesList from '../components/MoviesList/MoviesList';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
import getQueryString from '../utils/getQueryString';
import getDefaultPoster from '../assets/default_poster.jpg';
//Styles
import styles from './MoviesPage.module.css';

//TODO: вынести список и айтемы в отдельный компонент
export default class MoviesPage extends Component {
	state = {
		movies: [],
		error: null,
		loading: false,
	};

	componentDidMount() {
		const { query } = getQueryString(this.props.location.search);

		return query ? this.fetchMovies(query) : '';
	}

	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(this.props.location.search);

		return prevQuery !== nextQuery ? this.fetchMovies(nextQuery) : '';
	}

	fetchMovies = query => {
		this.setState({ loading: true });

		movieApi
			.fetchMoviesByQuery(query)
			.then(movies => this.setState({ movies }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	};

	handleChangeByQuery = query => {
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { movies, error, loading } = this.state;
		const { match } = this.props;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} />

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
										pathname: `${match.url}/${id}`,
										state: { from: this.props.location },
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
