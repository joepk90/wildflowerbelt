import React from 'react';

import "~components/section/section.scss";

const classModifiers = function(options) {

    let classList = [];

    if (!options) return '';

    /** PADDING OPTIONS */

    if (options.padding && options.padding === true) {
        classList.push('page-section--padding');
    }

    if (options.paddingTop && options.paddingTop === true) {
        classList.push('page-section--padding-top');
    }

    if (options.paddingBottom && options.paddingBottom === true) {
        classList.push('page-section--padding-bottom');
    }

    if (options.paddingLarge && options.paddingLarge === true) {
        classList.push('page-section--padding-large');
    }

    if (options.paddingTopLarge && options.paddingTopLarge === true) {
        classList.push('page-section--padding-top-large');
    }

    if (options.paddingBottomLarge && options.paddingBottomLarge === true) {
        classList.push('page-section--padding-bottom-large');
    }

    /** MARGIN OPTIONS */

    if (options.margin && options.margin === true) {
        classList.push('page-section--margin');
    }

    if (options.marginTop && options.marginTop === true) {
        classList.push('page-section--margin-top');
    }

    if (options.marginBottom && options.marginBottom === true) {
        classList.push('page-section--margin-bottom');
    }

    if (options.marginLarge && options.marginLarge === true) {
        classList.push('page-section--margin-large');
    }

    if (options.marginTopLarge && options.marginTopLarge === true) {
        classList.push('page-section--margin-top-large');
    }

    if (options.marginBottomLarge && options.marginBottomLarge === true) {
        classList.push('page-section--margin-bottom-large');
    }
    
    if (classList.length === 0) {
        return
    }

    return ' ' + classList.join(' ')

}

const Section = ({children, options}) => {

    const modifiers = classModifiers(options);

    return ( 
        <section className={'page-section' + modifiers}>{children}</section>
     );
}
 
export default Section;