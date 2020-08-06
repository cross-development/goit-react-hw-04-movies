//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Notification from '../Notification';
//Styles
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		value: '',
		hasError: false,
	};

	handleChange = e => this.setState({ value: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		const { value } = this.state;

		if (!value || value === ' ') {
			return this.setState({ hasError: true });
		}

		this.props.onSubmit(value);
		this.setState({ value: '', hasError: false });
	};

	render() {
		const { value, hasError } = this.state;

		return (
			<>
				<div className={styles.searchbar}>
					<form onSubmit={this.handleSubmit} className={styles.form}>
						<input
							className={styles.input}
							autoFocus
							type="text"
							autoComplete="off"
							placeholder="Search movie..."
							value={value}
							onChange={this.handleChange}
						/>

						<button type="submit" className={styles.button}>
							<span className={styles.label}>Search</span>
						</button>
					</form>
				</div>

				{hasError && <Notification message="Please enter any movie name" />}
			</>
		);
	}
}
