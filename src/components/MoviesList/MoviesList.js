//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../../assets/default_poster.jpg';
//Routes
import routes from '../../routes';
//Style
import styles from './MoviesList.module.css';

const MoviesList = ({ moviesData, location }) => (
	<ul className={styles.list}>
		{moviesData.map(({ id, poster_path, name, title, vote_average }) => (
			<li className={styles.listItem} key={id}>
				<Link
					className={styles.itemLink}
					to={{
						pathname: `${routes.movies}/${id}`,
						state: { from: location },
					}}
				>
					<img
						className={styles.itemImage}
						src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
						alt={name || title}
					/>
					<span>{name || title}</span>
				</Link>
				<span className={styles.movieVote}>{vote_average}</span>
			</li>
		))}
	</ul>
);

MoviesList.defaultProps = {
	location: {},
};

MoviesList.propTypes = {
	location: PropTypes.object,
	moviesData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default MoviesList;
