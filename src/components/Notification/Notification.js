//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Notification.module.css';

const Notification = ({ message }) => {
	return (
		<div className={styles.errorWrapper}>
			{`${message}` === 'Failed to fetch' ? (
				<>
					<p>Sorry!</p>
					<p>Check your internet connection and try again. We couldn't connect to the server.</p>
				</>
			) : (
				<p>{message}</p>
			)}
		</div>
	);
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
