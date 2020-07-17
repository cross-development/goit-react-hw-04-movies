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
		const { location } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{!loading && movies.length > 0 && <MoviesList moviesData={movies} onLocation={location} />}
			</>
		);
	}
}
