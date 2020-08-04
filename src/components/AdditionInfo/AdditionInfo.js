//Core
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
//Component
import Loader from '../../components/Loader';
//Styles
import styles from './AdditionInfo.module.css';
//AsyncComponents
import asyncComponents from '../../services/asyncComponents';

const AdditionInfo = ({ onMatch, onLoading, onLocation }) => (
	<div>
		<h2 className={styles.title}>Additional information</h2>
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<NavLink
					to={{
						pathname: `${onMatch.url}/cast`,
						state: { from: onLocation.state && onLocation.state.from },
					}}
					className={styles.itemLink}
					activeClassName={styles.itemLinkActive}
				>
					Cast
				</NavLink>
			</li>
			<li className={styles.listItem}>
				<NavLink
					to={{
						pathname: `${onMatch.url}/reviews`,
						state: { from: onLocation.state && onLocation.state.from },
					}}
					className={styles.itemLink}
					activeClassName={styles.itemLinkActive}
				>
					Reviews
				</NavLink>
			</li>
		</ul>

		<Suspense fallback={<Loader onLoad={onLoading} />}>
			<Switch>
				<Route path={`${onMatch.path}/cast`} component={asyncComponents.Cast} />
				<Route path={`${onMatch.path}/reviews`} component={asyncComponents.Reviews} />
			</Switch>
		</Suspense>
	</div>
);

AdditionInfo.defaultProps = {
	onMatch: {},
	onLocation: {},
	onLoading: false,
};

AdditionInfo.propTypes = {
	onMatch: PropTypes.object,
	onLoading: PropTypes.bool,
	onLocation: PropTypes.object,
};

export default AdditionInfo;
