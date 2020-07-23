import React from 'react';
import Icon from '~components/icon/icon';
import Navigation from '~components/common/navigation/navigation';
import Container from '~components/container/container';
import Section from '~components/section/section';
import { GridContainer, Row, Col } from '~components/common/grid/grid';

import '~components/footer/footer.scss';

const Footer = ({ menuLinks }) => {
    return (
        <footer className="site-footer">
            <Section options={{ paddingTopLarge: true, marginBottom: true }}>
                <Container>

                    <GridContainer>
                        <Row>
                            <Col sm={12} lg={6}>
                                <p className="site-footer__title">About Us</p>
                                <div className="site-footer__item">
                                    <Icon />
                                    {/* TODO move footer about content out of layout} */}
                                    <p className="site-footer__about-us">Wildflower Belt is a small independent family business built on a love of high quality leather accessories, based in London, UK. </p>
                                </div>
                            </Col>
                            <Col sm={12} lg={6}>
                                <p className="site-footer__title">Site Map</p>
                                <div className="site-footer__item">
                                    <Navigation menuLinks={menuLinks} />
                                </div>
                            </Col>
                        </Row>
                    </GridContainer>

                </Container>
            </Section>

            <Section options={{ paddingBottom: true }}>
                <Container>

                    <span className="site-footer__copyright">
                        © Wildflower Belt {new Date().getFullYear()}
                    </span>

                </Container>
            </Section>
        </footer>
    );
}

export default Footer;