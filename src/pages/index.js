import React from "react"
import { Link } from "gatsby"

import { pageLinks } from "~utilities/utilities.js"
import indexData from "~content/index.json"
import ReviewData from "~content/reviews.json"
import Layout from "~components/layout/layout";
import Image from "~components/image/image";
import Title from "~components/title/title";
import Container from "~components/container/container";
import Section from "~components/section/section";
import Content from "~components/content/content";
import Reviews from "~components/reviews/reviews";
import PromoCard from '~components/promo-card/promo-card';
import SEO from "~components/seo";
import { GridContainer, Row, Col } from '~components/common/grid/grid';

import "~scss/pages/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

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
              <PromoCard title="Worn with Confidence" linkAttributes={{ url: pageLinks.wildflowerbelt, title: 'Shop Now' }} />
            </Col>

          </Row>
        </GridContainer>

      </Container>
    </Section>

    <Section options={{ paddingLarge: true }}>
      <Container>
        <Title options={{ align: 'center' }}>{indexData.title}</Title>
        <Content content={indexData.description} />
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
        <Reviews reviewsData={ReviewData.reviews}></Reviews>
      </Container>
    </Section>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
