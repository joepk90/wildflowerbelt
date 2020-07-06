import React from 'react';
import Icon from '~components/icon/icon';
import Navigation from '~components/navigation/navigation';

import '~components/footer/footer.scss';

const Footer = ({menuLinks}) => {
    return ( 
        <footer className="site-footer">
            <div class="site-footer__section">

                <div className="site-footer__item">
                    <p className="site-footer__title">About Us</p>
                    <div className="site-footer__about">
                        <Icon />
                        <p className="site-footer__about-us">Wildflower Belt was established in Dorset, UK, as a small independent family business and is built on a love of high quality leather accessories.</p>
                    </div>
                </div>

                <div className="site-footer__item">
                    <div className="site-footer__site-map">
                        <p className="site-footer__title">Site Map</p>
                        <div className="site-footer__navigation">
                            <Navigation menuLinks={menuLinks}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__section">

                <span className="site-footer__copyright">
                        © Wildflower Belt {new Date().getFullYear()}
                </span>

            </div>
        </footer>
     );
}
 
export default Footer;