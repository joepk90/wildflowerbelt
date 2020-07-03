import React, { Component } from 'react';

import Image from "./image"

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="site-logo">
                <Image className="site-logo" alt="The Wildflower Belt" filename="wildflower-belt-logo.png" />
            </div>
         );
    }
}
 
export default Logo;