//Core
import React, { Component } from 'react';
//Components
import Loader from '../components/Loader/Loader';
import ReviewsList from '../components/ReviewsList/ReviewsList';
import Notification from '../components/Notification/Notification';
//Services
import movieApi from '../services/movieApi';

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

	render() {
		const { reviews, error, loading } = this.state;

		return (
			<>
				{error && <Notification message={error.message} />}

				{loading && <Loader onLoad={loading} />}

				{!loading && !error && reviews.length < 1 && (
					<Notification message="We don't have any reviews for this movie." />
				)}

				{reviews.length > 0 && <ReviewsList reviewsData={reviews} />}
			</>
		);
	}
}
