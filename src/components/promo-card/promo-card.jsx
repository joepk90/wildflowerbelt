import React from 'react';

import Link from '~components/common/link/link';

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

                <Link {...linkAttributes}>Shop Now</Link>

            </div>

        </div>
    );
}

export default PromoCard;