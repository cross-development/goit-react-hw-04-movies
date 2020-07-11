//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Notification.module.css';

const Notification = ({ message }) => {
	return (
		<div className={styles.errorWrapper}>
			<p>`Woops, something went wrong ${message}`</p>
		</div>
	);
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
