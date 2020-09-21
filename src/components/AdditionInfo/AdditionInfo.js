//Core
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
//Component
import Loader from 'components/Loader';
//Styles
import styles from './AdditionInfo.module.css';
//AsyncComponents
import asyncComponents from 'services/asyncComponents';

const AdditionInfo = ({ location, match, isLoading }) => (
	<div>
		<h2 className={styles.title}>Additional information</h2>

		<ul className={styles.list}>
			<li className={styles.listItem}>
				<NavLink
					to={{
						pathname: `${match.url}/cast`,
						state: { from: location.state && location.state.from },
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
						pathname: `${match.url}/reviews`,
						state: { from: location.state && location.state.from },
					}}
					className={styles.itemLink}
					activeClassName={styles.itemLinkActive}
				>
					Reviews
				</NavLink>
			</li>
		</ul>

		<Suspense fallback={<Loader onLoad={isLoading} />}>
			<Switch>
				<Route path={`${match.path}/cast`} component={asyncComponents.Cast} />
				<Route path={`${match.path}/reviews`} component={asyncComponents.Reviews} />
			</Switch>
		</Suspense>
	</div>
);

AdditionInfo.defaultProps = {
	match: {},
	location: {},
	isLoading: false,
};

AdditionInfo.propTypes = {
	isLoading: PropTypes.bool,
	match: PropTypes.objectOf(PropTypes.any),
	location: PropTypes.objectOf(PropTypes.any),
};

export default AdditionInfo;
