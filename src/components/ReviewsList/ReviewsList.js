//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviewsData }) => (
	<ul className={styles.list}>
		{reviewsData.map(({ id, author, content, url }) => (
			<li key={id} className={styles.listItem}>
				<h3 className={styles.title}>
					Written by{' '}
					<a href={url} target="_blank" rel="noopener noreferrer">
						{author}
					</a>
				</h3>
				<p className={styles.reviews}>{content}</p>
			</li>
		))}
	</ul>
);

ReviewsList.propTypes = {
	reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ReviewsList;
