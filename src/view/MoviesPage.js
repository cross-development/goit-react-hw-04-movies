//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components

//Services
import movieApi from '../services/movieApi';
//Styles

export default class MoviesPage extends Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		movieApi.fetchMoviesByQuery('cat').then(movies => this.setState({ movies }));
	}

	render() {
		const { movies } = this.state;
		const { match } = this.props;

		return (
			<ul>
				{movies.map(movie => (
					<li key={movie.id}>
						<Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
					</li>
				))}
			</ul>
		);
	}
}
