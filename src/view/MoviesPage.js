//Core
import React, { Component } from 'react';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import Notification from 'components/Notification';
//Services
import movieApi from 'services/movieApi';
//Utils
import getQueryString from 'utils/getQueryString';

export default class MoviesPage extends Component {
	state = {
		movies: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { query } = getQueryString(this.props.location.search);

		return query ? this.fetchMovies(query) : null;
	}

	componentDidUpdate(prevProps, prevState) {
		const { query: prevQuery } = getQueryString(prevProps.location.search);
		const { query: nextQuery } = getQueryString(this.props.location.search);

		return prevQuery !== nextQuery ? this.fetchMovies(nextQuery) : null;
	}

	fetchMovies = query => {
		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesByQuery(query)
			.then(movies => this.setState({ movies }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	};

	handleChangeByQuery = query => {
		const { history, location } = this.props;

		history.push({
			pathname: location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { movies, error, isLoading } = this.state;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} />

				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && <MoviesList {...this.props} moviesData={movies} />}
			</>
		);
	}
}
