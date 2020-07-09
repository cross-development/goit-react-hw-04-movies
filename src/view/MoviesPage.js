//Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components

//Services
import movieApi from '../services/movieApi';
//Styles
import styles from './MoviesPage.module.css';

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

		const imgUrl = 'https://image.tmdb.org/t/p/w500';

		return (
			<ul className={styles.movieList}>
				{movies.map(movie => (
					<li className={styles.movieItem} key={movie.id}>
						<Link className={styles.movieItemLink} to={`${match.url}/${movie.id}`}>
							<img
								className={styles.movieItemImage}
								src={`${imgUrl}${movie.poster_path}`}
								alt={movie.title}
							/>
							{movie.title}
						</Link>
						<span className={styles.movieVote}>{movie.vote_average}</span>
					</li>
				))}
			</ul>
		);
	}
}

// adult: false
// backdrop_path: "/cD2GDhwzEOePDzGOqAqxiZZLFeX.jpg"
// genre_ids: (2) [35, 37]
// id: 11694
// original_language: "en"
// original_title: "Cat Ballou"
// overview: "A woman seeking revenge for her murdered father hires a famous gunman, but he's very different from what she expects."
// popularity: 12.948
// poster_path: "/fSebGYTxVrHXE4y3Su5uwJSEtni.jpg"
// release_date: "1965-06-24"
// title: "Cat Ballou"
// video: false
// vote_average: 6.7
// vote_count: 120
