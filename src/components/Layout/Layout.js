//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Layout.module.css';

const Layout = ({ title, children }) => {
	return (
		<section className={styles.section}>
			{title && <h2>{title}</h2>}
			{children}
		</section>
	);
};

Layout.defaultProps = {
	title: '',
};

Layout.propTypes = {
	title: PropTypes.string,
};

export default Layout;
