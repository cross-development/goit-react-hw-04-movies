//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		value: '',
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		const { value } = this.state;

		return (
			<div className={styles.searchbar}>
				<form onSubmit={this.handleSubmit} className={styles.searchForm}>
					<input
						className={styles.searchFormInput}
						type="text"
						value={value}
						autoComplete="off"
						autoFocus
						onChange={this.handleChange}
						placeholder="Search movie..."
					/>

					<button type="submit" className={styles.searchFormButton}>
						<span className={styles.searchFormButtonLabel}>Search</span>
					</button>
				</form>
			</div>
		);
	}
}
