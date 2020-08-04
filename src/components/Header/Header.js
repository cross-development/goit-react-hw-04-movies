//Core
import React from 'react';
//Components
import Logo from '../Logo';
import Navigation from '../Navigation';
//Styles
import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<Logo />
		<Navigation />
	</header>
);

export default Header;
