import React from 'react';
import { Link } from "gatsby"

import '~components/common/link/link.scss';

const renderClassList = function (options) {

    let classList = [];

    if (!options) return '';

    if (options.rounded && options.rounded === true) {
        classList.push('link--rounded');
    }

    if (options.large && options.large === true) {
        classList.push('link--large');
    }

    if (options.promo && options.promo === true) {
        classList.push('link--promo');
    }

    if (classList.length === 0) {
        return '';
    }

    return ' ' + classList.join(' ')

}

const CustomLink = ({ children, modifiers, className, ...linkAttributes }) => {

    className = className ? ' ' + className : '';

    return (
        <Link
            className={'link' + renderClassList(modifiers) + className}
            {...linkAttributes}
        >{children}</Link>
    );
}

export default CustomLink;