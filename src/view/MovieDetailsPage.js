//Core
import React, { Component } from 'react';
//Components
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Notification from 'components/Notification';
import ButtonGoBack from 'components/ButtonGoBack';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';
//Services
import movieApi from 'services/movieApi';
//Routes
import routes from 'routes';

export default class MovieDetailsPage extends Component {
	state = {
		movie: '',
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	handleGoBack = () => {
		const { location, history } = this.props;

		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, error, isLoading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{movie === null && <NotFound />}

				{!isLoading && movie && (
					<>
						<ButtonGoBack onChangeClick={this.handleGoBack} />

						<MovieDetails movieData={movie} />

						<AdditionInfo {...this.props} isLoading={isLoading} />
					</>
				)}
			</>
		);
	}
}
