//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Utils
import getPosterUrl from '../utils/getPosterUrl';
import getDefaultAvatar from '../assets/unnamed.jpg';
//Styles
import style from './Cast.module.css';

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

				{!loading && !error && casts.length === 0 && (
					<Notification message="There are no actors information for this film" />
				)}

				{casts.length > 0 && (
					<ul className={style.castsList}>
						{casts.map(({ cast_id, name, profile_path }) => (
							<li key={cast_id} className={style.castsListItem}>
								<img
									src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultAvatar}
									alt={name}
									className={style.actorAvatar}
								/>
								<span className={style.actorName}>{name}</span>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}
