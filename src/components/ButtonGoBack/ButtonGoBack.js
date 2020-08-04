//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ButtonGoBack.module.css';

const ButtonGoBack = ({ onChangeClick }) => (
	<div className={styles.buttonWrapper}>
		<button className={styles.button} type="submit" onClick={onChangeClick}>
			Go Back
		</button>
	</div>
);

ButtonGoBack.propTypes = {
	onChangeClick: PropTypes.func.isRequired,
};

export default ButtonGoBack;
