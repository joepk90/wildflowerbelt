import React from 'react';

import "~components/section/section.scss";

const classModifiers = function(options) {

    let classList = [];

    if (!options) return '';

    if (options.padding && options.padding === true) {
        classList.push('page-section--padding');
    }

    if (options.paddingTop && options.paddingTop === true) {
        classList.push('page-section--padding-top');
    }

    if (options.paddingBottom && options.paddingBottom === true) {
        classList.push('page-section--padding-bottom');
    }

    if (options.margin && options.margin === true) {
        classList.push('page-section--margin');
    }

    if (options.marginTop && options.marginTop === true) {
        classList.push('page-section--margin-top');
    }

    if (options.marginBottom && options.marginBottom === true) {
        classList.push('page-section--margin-bottom');
    }

    
    if (classList.length === 0) {
        return
    }

    return ' ' + classList.join(' ')

}

const Section = ({children, options}) => {

    const modifiers = classModifiers(options);

    return ( 
        <section className={'page-section ' + modifiers}>{children}</section>
     );
}
 
export default Section;