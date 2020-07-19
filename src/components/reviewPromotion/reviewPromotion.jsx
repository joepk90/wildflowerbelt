import React from 'react';

import Review from "~components/common/review/review";

import "~components/reviewPromotion/reviewPromotion.scss";

import variables from '~scss/base/_base.scss';

class ReviewPromotion extends Review {

    render() {

        const starRatingOptionsObject = {
            starRatedColor: variables.colorPrimary,
            starDimension: "40px",
        };

        return (

            <Review modifiers={{ promo: true }}>
                {this.renderRating(starRatingOptionsObject)}
                {this.renderUser()}
                {this.renderComment()}
            </Review>

        );
    }
}

export default ReviewPromotion;