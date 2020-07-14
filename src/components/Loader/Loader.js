//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import PacmanLoader from 'react-spinners/PacmanLoader';
//Styles
import { css } from '@emotion/core';

//Custom css
const customCss = css`
	display: block;
	margin: 60% 38%;

	@media (min-width: 768px) {
		margin: 10% 45%;
	}

	@media (min-width: 1024px) {
		margin: 25% 45%;
	}

	@media (min-width: 1440px) {
		margin: 15% auto;
	}
`;

const Loader = ({ onLoad }) => {
	return <PacmanLoader size={50} color={'#f39c12'} loading={onLoad} css={customCss} />;
};

Loader.defaultProps = {
	onLoad: false,
};

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

export default Loader;
