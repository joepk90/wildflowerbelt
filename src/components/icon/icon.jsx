import React from 'react';

import Image from "~components/image/image";

import "~components/icon/icon.scss";

const Icon = () => {
    return ( 
        <div className="site-icon">
            <Image className="site-icon" alt="The Wildflower Belt" filename="wildflower-belt-icon.png" />
        </div>
     );
}
 
export default Icon;