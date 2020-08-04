//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Routes
import routes from '../../routes';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => (
	<ul className={styles.navList}>
		<li className={styles.navListItem}>
			<NavLink
				exact
				to={routes.home}
				className={styles.navLink}
				activeClassName={styles.navLinkActive}
			>
				Home
			</NavLink>
		</li>

		<li className={styles.navListItem}>
			<NavLink
				to={routes.movies}
				className={styles.navLink}
				activeClassName={styles.navLinkActive}
			>
				Movies
			</NavLink>
		</li>
	</ul>
);

export default Navigation;
