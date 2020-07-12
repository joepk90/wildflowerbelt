import React from 'react';

import "~components/reviews/reviews.scss";

const renderReview = (review, index) => {

    if (!review.review || !review.user) return;

    // TODO make review component?
    return (
        <div className="review" key={index}>
            <blockquote className="review__quote">
                "{review.review}”
            </blockquote>
            <em className="review__user">~ {review.user}</em>
        </div>
    );
}

const Reviews = ({ reviewsData }) => {

    return (
        <div className="reviews">

            <h2>Reviews</h2>

            {reviewsData.map((review, index) => {
                return renderReview(review, index);
            })}

        </div>
    );
}

export default Reviews;