import React, { Component } from 'react';
import StarRatings from 'react-star-ratings'

import variables from '~scss/base/_base.scss';
import "~components/common/review/review.scss";

class Review extends Component {

    renderClassList() {

        const className = 'review';
        let classModifiers = [];

        const { modifiers } = this.props;

        if (!modifiers) return className;

        if (modifiers.box && modifiers.box === true) {
            classModifiers.push('box');
        }

        if (modifiers.promo && modifiers.promo === true) {
            classModifiers.push('promo');
        }

        if (!classModifiers.length) return className

        return className + ' review--' + classModifiers.join(' review--')

    }

    renderUser() {

        const { user } = this.props;

        if (!user) return;

        return <div className="review__user">{user}</div>

    }

    renderDate() {

        const { date } = this.props;

        if (!date) return;

        let convertedDate = new Date(date * 1000);

        let options = { year: 'numeric', month: 'numeric', day: 'numeric', timezone: 'UTC' };

        let formattedDate = new Date(convertedDate.getUTCFullYear(), convertedDate.getUTCMonth(), convertedDate.getUTCDate()).toLocaleDateString("en-US", options);

        return <div className="review__date">{formattedDate}</div>

    }

    renderComment() {

        const { comment } = this.props;

        if (!comment) return;

        return <div className="review__comment">{comment}</div>

    }

    renderRating(starRatingOptions = null) {

        const { rating } = this.props;

        if (!rating) return;

        const ratingInt = parseInt(rating);

        if (Number.isInteger(ratingInt) === false) return;

        let starRatedColor = variables.secondaryPrimary;
        if (starRatingOptions !== null && starRatingOptions.starRatedColor) {
            starRatedColor = starRatingOptions.starRatedColor;
        }

        let starDimension = "20px";
        if (starRatingOptions !== null && starRatingOptions.starDimension) {
            starDimension = starRatingOptions.starDimension;
        }

        const starRatingOption = {
            rating: ratingInt,
            starRatedColor: starRatedColor,
            starDimension: starDimension,
            starSpacing: "0",
            numberOfStars: 5,
            name: 'rating',
        }

        return (
            <div className="review__rating">
                <StarRatings
                    {...starRatingOption}
                />
            </div>
        )

    }

    renderContent() {

        if (this.props.children) return this.props.children;

        return (
            <React.Fragment>

                <div className="review__heading">
                    {this.renderUser()}
                    {this.renderDate()}
                    {this.renderRating()}
                </div>

                {this.renderComment()}

            </React.Fragment>
        )

    }

    render() {

        return (
            <div className={this.renderClassList()}>
                {this.renderContent()}
            </div>
        );
    }
}

export default Review;