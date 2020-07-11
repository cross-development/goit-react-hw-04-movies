//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Routes
import routes from '../../routes';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<ul className={styles.navigationList}>
			<li className={styles.navigationListItem}>
				<NavLink
					exact
					to={routes.home}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Home
				</NavLink>
			</li>
			<li className={styles.navigationListItem}>
				<NavLink
					to={routes.movies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Movies
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;
