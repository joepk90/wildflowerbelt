import React from 'react';

import '~components/common/button/button.scss';

// TODO this function should be made global. both Link and Button use it
const renderClassList = function (options) {

    let classList = [];

    if (!options) return '';

    /** PADDING OPTIONS */

    if (options.rounded && options.rounded === true) {
        classList.push('button--rounded');
    }

    if (options.large && options.large === true) {
        classList.push('button--large');
    }

    if (options.promo && options.promo === true) {
        classList.push('button--promo');
    }

    if (classList.length === 0) {
        return '';
    }

    return ' ' + classList.join(' ')

}

const Button = ({ children, modifiers, className, ...buttonAttributes }) => {

    className = className ? ' ' + className : '';

    return (
        <button
            className={'button' + renderClassList(modifiers) + className}
            {...buttonAttributes}
        >{children}</button>
    );
}

export default Button;