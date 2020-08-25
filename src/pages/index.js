import React from "react"
import { Link } from "gatsby"

import "~scss/pages/index.scss"

import { pageLinks } from "~utilities/utilities.js"
import indexData from "~content/pages/index.json"
import Layout from "~components/layout/layout";
import Image from "~components/image/image";
import Title from "~components/title/title";
import Container from "~components/container/container";
import Section from "~components/section/section";
import Content from "~components/content/content";
import PromoCard from '~components/promo-card/promo-card';
import SEO from "~components/seo";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import ReviewPromotion from "~components/reviewPromotion/reviewPromotion";
import WildflowerbeltData from "~content/products/wildflowerbelt";
import Belt from "~classes/belt";
const wildflowerBelt = new Belt(WildflowerbeltData);

const IndexPage = ({ location }) => (
  <Layout>

    <SEO pathname={location.pathname} {...indexData.seo} />

    <Section options={{ paddingLarge: true }}>
      <Container options={{ fullWidth: true }}>

        <GridContainer>
          <Row>

            <Col md={12} lg={6}>
              <Link to={pageLinks.wildflowerbelt}>
                <Image className="site-logo" alt="The Wildflower Belt" filename="wildflower-belt.jpg" />
              </Link>
            </Col>

            <Col md={12} lg={5}>
              <PromoCard title="Worn with Confidence" linkAttributes={{ to: pageLinks.wildflowerbelt, title: 'Shop Now', modifiers: { promo: true, rounded: true, large: true } }} />
            </Col>

          </Row>
        </GridContainer>

      </Container>
    </Section>

    <Section options={{ paddingLarge: true }}>
      <Container>
        <Title options={{ align: 'center' }}>{indexData.title}</Title>
        <Content content={indexData.description} options={{ textAlign: "center", contained: true }} />
      </Container>
    </Section>


    <Section options={{ paddingLarge: true }}>
      <Container>
        <GridContainer>
          <Row>

            <Col xs={12} sm={4}>
              <Link to={pageLinks.wildflowerbelt}>
                <Image alt="Snap On Feature" filename="snap-on-feature.jpg" />
              </Link>
            </Col>

            <Col xs={12} sm={4}>
              <Link to={pageLinks.wildflowerbelt}>
                <Image alt="Embossed Pattern" filename="embossed-pattern.jpg" />
              </Link>
            </Col>

            <Col xs={12} sm={4}>
              <Link to={pageLinks.wildflowerbelt}>
                <Image alt="Free Shipping" filename="free-shipping.jpg" />
              </Link>
            </Col>

          </Row>
        </GridContainer>
      </Container>
    </Section>

    <Section options={{ paddingLarge: true }}>
      <Container>

        <h2 class="text-center">Reviews</h2>
        {/* TODO - setup optional tag input for title  */}
        {/* <Title options={{ align: 'center', tag: 'h2' }}>Reviews</Title> */}

        {wildflowerBelt.getReviews(['user', 'rating', 'comment']).map(((review, index) => {
          return <ReviewPromotion {...review} key={index} />
        }))}

      </Container>
    </Section>

  </Layout>
)

export default IndexPage
