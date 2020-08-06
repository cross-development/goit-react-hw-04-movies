//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';

export default class HomePage extends Component {
	state = {
		movies: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });

		movieApi
			.fetchTrendMovies()
			.then(movies => this.setState({ movies }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { movies, error, isLoading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList {...this.props} moviesData={movies} />}
			</>
		);
	}
}
