//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<ul>
			<li>
				<NavLink
					exact
					to="/"
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/movies"
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
