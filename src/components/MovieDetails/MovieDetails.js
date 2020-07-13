//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../../assets/default_poster.jpg';
//Styles
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieData }) => {
	const { poster_path, title, name, release_date, popularity, overview, genres } = movieData;

	return (
		<div className={styles.movieWrapper}>
			<div className={styles.posterWrapper}>
				<img
					src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
					alt={title || name}
				/>
			</div>

			<div className={styles.detailsWrapper}>
				<h1>
					{title || name} {release_date.slice(0, 4)}
				</h1>
				<p>User Score: {Math.round(popularity)}%</p>
				<h2>Overview</h2>
				<p>{overview}</p>
				<h3>Genres</h3>
				<p>{genres.map(({ name }) => `${name} `)}</p>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	movieData: PropTypes.object.isRequired,
};

export default MovieDetails;
