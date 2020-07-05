import React from 'react';

import "~components/section/section.scss";

const Section = ({children}) => {
    return ( 
        <section className="page-section container">{children}</section>
     );
}
 
export default Section;