//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification/Notification';
import Loader from '../components/Loader/Loader';
//Services
import movieApi from '../services/movieApi';
//Styles
import styles from './Reviews.module.css';

export default class Reviews extends Component {
	state = {
		reviews: [],
		error: null,
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });

		const { match } = this.props;

		movieApi
			.fetchMoviesReviews(match.params.movieId)
			.then(reviews => this.setState({ reviews }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ loading: false }));
	}

	componentDidUpdate(prevProps, prevState) {
		window.scrollTo({
			top: `${document.documentElement.clientHeight - 160}`,
			behavior: 'smooth',
		});
	}

	render() {
		const { reviews, error, loading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{!loading && !error && reviews.length === 0 && (
					<Notification message="We don't have any reviews for this movie." />
				)}

				{reviews.length > 0 && (
					<ul className={styles.reviewList}>
						{reviews.map(({ id, author, content, url }) => (
							<li key={id} className={styles.reviewItem}>
								<h3 className={styles.reviewItemTitle}>
									Written by{' '}
									<a href={url} target="_blank" rel="noopener noreferrer">
										{author}
									</a>
								</h3>
								<p className={styles.reviewItemContent}>{content}</p>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}
