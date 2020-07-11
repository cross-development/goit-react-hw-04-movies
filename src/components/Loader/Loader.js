//Core
import React from 'react';
import PropTypes from 'prop-types';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Loader = ({ onLoad }) => {
	return (
		<PacmanLoader
			size={50}
			color={'#f39c12'}
			loading={onLoad}
			css={{ margin: '15% auto', display: 'block' }}
		/>
	);
};

Loader.propTypes = {
	onLoad: PropTypes.bool.isRequired,
};

export default Loader;
