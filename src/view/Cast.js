//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import CastList from '../components/CastList/CastList';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';
//TODO: исправить загрузку кастов и ревьюх, т.к. при фетче инфо сразу выдает нотификацию, потом дает инфо
export default class Cast extends Component {
	state = {
		casts: [],
		error: null,
		loading: false,
	};

	componentDidMount() {
		// this.setState({ loading: true });

		const { match } = this.props;

		movieApi
			.fetchMoviesByCast(match.params.movieId)
			.then(casts => this.setState({ casts }))
			.catch(error => this.setState({ error }));
		// .finally(() => this.setState({ loading: false }));

		window.scrollTo({
			top: `${document.documentElement.clientHeight - 160}`,
			behavior: 'smooth',
		});
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	window.scrollTo({
	// 		top: `${document.documentElement.clientHeight - 160}`,
	// 		behavior: 'smooth',
	// 	});
	// }

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
