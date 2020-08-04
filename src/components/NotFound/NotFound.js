//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Utils
import imgPath from '../../assets/not_found_img.jpg';
//Routes
import routes from '../../routes';
//Style
import styles from './NotFound.module.css';

const NotFound = () => (
	<div className={styles.imgWrapper}>
		<img src={imgPath} alt="Page not found" className={styles.image} />
		<h2 className={styles.title}>
			Ooops! Something went wrong. Please go to <Link to={routes.home}>homepage</Link>.
		</h2>
	</div>
);

export default NotFound;
