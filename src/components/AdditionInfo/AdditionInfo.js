//Core
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
//Component
import Loader from '../../components/Loader/Loader';
//Styles
import styles from './AdditionInfo.module.css';
//AsyncComponents
const Cast = lazy(() => import('../../view/Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() => import('../../view/Reviews' /* webpackChunkName: "reviews-view"*/));

const AdditionInfo = ({ onMatch, onLoading, onLocation }) => {
	const { state } = onLocation;

	return (
		<div>
			<h2 className={styles.additionalTitle}>Additional information</h2>
			<ul className={styles.additionalInfoList}>
				<li className={styles.additionalInfoListItem}>
					<NavLink
						to={{
							pathname: `${onMatch.url}/cast`,
							state: { from: state && state.from },
						}}
						className={styles.additionalInfoLink}
						activeClassName={styles.additionalInfoLinkActive}
					>
						Cast
					</NavLink>
				</li>
				<li className={styles.additionalInfoListItem}>
					<NavLink
						to={{
							pathname: `${onMatch.url}/reviews`,
							state: { from: state && state.from },
						}}
						className={styles.additionalInfoLink}
						activeClassName={styles.additionalInfoLinkActive}
					>
						Reviews
					</NavLink>
				</li>
			</ul>

			<Suspense fallback={<Loader onLoad={onLoading} />}>
				<Switch>
					<Route path={`${onMatch.path}/cast`} component={Cast} />
					<Route path={`${onMatch.path}/reviews`} component={Reviews} />
				</Switch>
			</Suspense>
		</div>
	);
};

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
