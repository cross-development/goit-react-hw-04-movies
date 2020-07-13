//Core
import React, { Component } from 'react';
//Views
import NotFoundPage from './NotFoundPage';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import AdditionInfo from '../components/AdditionInfo/AdditionInfo';
//Services
import movieApi from '../services/movieApi';
//Routes
import routes from '../routes';

export default class MovieDetailsPage extends Component {
	state = {
		movie: '',
		error: null,
		loading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ loading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	//TODO: при нажатии кнопки возврат должен быть на страницу поиска фильмов или на главную, в зависимости откуда пришли
	handleGoBack = () => {
		const { location, history } = this.props;
		//! при переходе на Cast или Reviews возвращает на предыдущее место в истории. Скорее всего проблема в этом месте
		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, error, loading } = this.state;
		const { match } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{movie === null && <NotFoundPage />}

				<div>
					{!loading && movie && (
						<>
							<ButtonGoBack onChangeClick={this.handleGoBack} />

							<MovieDetails movieData={movie} />

							<AdditionInfo onMatch={match} onLoading={loading} />
						</>
					)}
				</div>
			</>
		);
	}
}
