//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
import getDefaultPoster from '../../assets/default_poster.jpg';
//Routes
import routes from '../../routes';
//Style
import styles from './MoviesList.module.css';

const MoviesList = ({ moviesData }) => {
	return (
		<ul className={styles.movieList}>
			{moviesData.map(movie => (
				<li className={styles.movieItem} key={movie.id}>
					<Link
						className={styles.movieItemLink}
						to={{
							pathname: `${routes.movies}/${movie.id}`,
							// pathname: `${match.url}/${movie.id}`,
							// state: { from: this.props.location },
						}}
					>
						<img
							className={styles.movieItemImage}
							src={movie.poster_path ? `${getPosterUrl}${movie.poster_path}` : getDefaultPoster}
							alt={movie.name || movie.title}
						/>
						<span>{movie.name || movie.title}</span>
					</Link>
					<span className={styles.movieVote}>{movie.vote_average}</span>
				</li>
			))}
		</ul>
	);
};

MoviesList.propTypes = {
	moviesData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MoviesList;
