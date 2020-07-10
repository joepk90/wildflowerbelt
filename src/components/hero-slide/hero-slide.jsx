import React, { Component } from 'react';
import Image from '~components/image/image';
import PromoButton from '~components/promo-button/promo-button';
import './hero-slide.scss';

// These needs refactoring. make reusable

class HeroSlide extends Component {
    state = {}

    render() {

        const linkAttributes = {
            url: '/product-details',
            title: 'Shop Now'
        };

        return (
            <div className="hero-slide">

                <div className="hero-slide__background-image"></div>

                <div className="hero-slide__wrapper container">
                    <div className="hero-slide__image">
                        <Image className="site-logo" alt="The Wildflower Belt" filename="wildflower-belt.jpg" />
                    </div>
                    <div className="hero-slide__content">

                        <p className="hero-slide__title">Worn with Confidence</p>

                        <PromoButton linkAttributes={linkAttributes}>Shop Now</PromoButton>

                    </div>
                </div>

            </div>
        );
    }
}

export default HeroSlide;