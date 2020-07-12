//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components
import Notification from '../components/Notification/Notification';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
import getDefaultPoster from '../assets/default_poster.jpg';
import getQueryString from '../utils/getQueryString';
//Styles
import styles from './MoviesPage.module.css';

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

				{!loading && movies.length > 0 && (
					<ul className={styles.movieList}>
						{movies.map(movie => (
							<li className={styles.movieItem} key={movie.id}>
								<Link
									className={styles.movieItemLink}
									to={{
										pathname: `${match.url}/${movie.id}`,
										state: { from: this.props.location },
									}}
								>
									<img
										className={styles.movieItemImage}
										src={
											movie.poster_path ? `${getPosterUrl}${movie.poster_path}` : getDefaultPoster
										}
										alt={movie.name || movie.title}
									/>
									<span>{movie.name || movie.title}</span>
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

// adult: false
// backdrop_path: "/cD2GDhwzEOePDzGOqAqxiZZLFeX.jpg"
// genre_ids: (2) [35, 37]
// id: 11694
// original_language: "en"
// original_title: "Cat Ballou"
// overview: "A woman seeking revenge for her murdered father hires a famous gunman, but he's very different from what she expects."
// popularity: 12.948
// poster_path: "/fSebGYTxVrHXE4y3Su5uwJSEtni.jpg"
// release_date: "1965-06-24"
// title: "Cat Ballou"
// video: false
// vote_average: 6.7
// vote_count: 120
