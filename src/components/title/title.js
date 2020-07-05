import React from 'react';

const renderModifiers = (options) => {

    if (options === null) return;
    
    if ( options.align && options.align === 'center') {
        return 'text-center';
    }

}

const Title = ({children, options = null} ) => {

    return ( 
        <h1 className={renderModifiers(options)}>{children}</h1>
     );
}
 
export default Title;