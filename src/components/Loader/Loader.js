//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import PacmanLoader from 'react-spinners/PacmanLoader';

//Custom css
const customCss = {
	margin: '15% auto',
	display: 'block',
};

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
