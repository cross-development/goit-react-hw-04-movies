//Core
import React, { Component } from 'react';
//Components

//Services
import movieApi from '../services/movieApi';
//Styles

export default class MovieDetailsPage extends Component {
	state = {
		movies: null,
	};

	componentDidMount() {
		const { match } = this.props;
		movieApi.fetchMoviesDetails(match.params.movieId).then(movie => this.setState({ movie }));
	}

	render() {
		const { movie } = this.state;
		const imgUrl = 'https://image.tmdb.org/t/p/w500';

		return (
			<div>
				{movie && (
					<>
						<img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
						<h1>{movie.title}</h1>{' '}
					</>
				)}
			</div>
		);
	}
}
