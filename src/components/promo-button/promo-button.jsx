import React from 'react';
import '~components/promo-button/promo-button.scss';

// TODO needs refactoring

const PromoButton = ({ linkAttributes, children }) => {
    return (
        <div className="promo-button">
            <a className="promo-button__link"
                href={linkAttributes.url}
                title={linkAttributes.title}
                target=""
            >{children}</a>
        </div>
    );
}

export default PromoButton;