import React from 'react';

import PromoButton from '~components/promo-button/promo-button';

import "~components/promo-card/promo-card.scss";

/** 
 * Promo Card
 * Should be setup to accept several peices of data
 * Image
 * Title
 * Description
 * Sub Title
 * List Items?
 * Data?
 * PromoLink
 */

const PromoCard = ({ title, linkAttributes }) => {
    return (
        <div className="promo-card">

            <div className="promo-card__wrapper">

                <p className="promo-card__title">{title}</p>

                <PromoButton linkAttributes={linkAttributes}>Shop Now</PromoButton>

            </div>

        </div>
    );
}

export default PromoCard;