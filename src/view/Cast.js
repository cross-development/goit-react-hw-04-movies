//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
import CastList from '../components/CastList/CastList';
//Services
import movieApi from '../services/movieApi';

export default class Cast extends Component {
	state = {
		casts: [],
		error: null,
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });

		const { match } = this.props;

		movieApi
			.fetchMoviesByCast(match.params.movieId)
			.then(casts => this.setState({ casts }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	componentDidUpdate(prevProps, prevState) {
		window.scrollTo({
			top: `${document.documentElement.clientHeight - 160}`,
			behavior: 'smooth',
		});
	}

	render() {
		const { casts, error, loading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{!loading && !error && casts.length < 1 && (
					<Notification message="We don't have any actors for this movie." />
				)}

				{casts.length > 0 && <CastList castsData={casts} />}
			</>
		);
	}
}
