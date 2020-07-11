//Core
import React from 'react';
//Components
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
//Styles
import styles from './Header.module.css';

//TODO: добавить ссылку на дом.страницу по клику на лого
const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
