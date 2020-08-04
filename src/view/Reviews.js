//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader';
import ReviewsList from '../components/ReviewsList';
import Notification from '../components/Notification';
//Services
import movieApi from '../services/movieApi';

export default class Reviews extends Component {
	state = {
		reviews: [],
		error: null,
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesReviews(match.params.movieId)
			.then(reviews => this.setState({ reviews }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { reviews, error, isLoading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !error && reviews.length < 1 && (
					<Notification message="We don't have any reviews for this movie." />
				)}

				{reviews.length > 0 && <ReviewsList reviewsData={reviews} />}
			</>
		);
	}
}
