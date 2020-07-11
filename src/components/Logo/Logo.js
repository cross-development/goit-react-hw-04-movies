//Core
import React from 'react';
import logoPath from '../../assets/movie_logo.png';
//Styles
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logoWrapper}>
			<img src={logoPath} alt="logo" className={styles.logo} />
		</div>
	);
};

export default Logo;
