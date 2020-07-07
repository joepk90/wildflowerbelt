import React from 'react';
import Icon from '~components/icon/icon';
import Navigation from '~components/navigation/navigation';
import { GridContainer, Row, Col } from '~components/common/grid/grid';

import '~components/footer/footer.scss';

const Footer = ({menuLinks}) => {
    return ( 
        <footer className="site-footer">
            <section class="site-footer__section">

                <GridContainer>
                    <Row>
                        <Col sm={12} lg={6}>
                            <p className="site-footer__title">About Us</p>
                            <div className="site-footer__item">
                                <Icon />
                                <p className="site-footer__about-us">Wildflower Belt was established in Dorset, UK, as a small independent family business and is built on a love of high quality leather accessories.</p>
                            </div>
                        </Col>
                        <Col sm={12} lg={6}>
                            <p className="site-footer__title">Site Map</p>
                                <div className="site-footer__item">
                                    <Navigation menuLinks={menuLinks}/>
                            </div>
                        </Col>
                    </Row>
                </GridContainer>
            </section>

            <section class="site-footer__section">

                <span className="site-footer__copyright">
                        © Wildflower Belt {new Date().getFullYear()}
                </span>

            </section>
        </footer>
     );
}
 
export default Footer;