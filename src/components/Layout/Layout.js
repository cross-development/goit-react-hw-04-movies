//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Layout.module.css';

const Layout = ({ children }) => <section className={styles.section}>{children}</section>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
