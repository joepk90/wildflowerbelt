import React from "react"

import Layout from "~components/layout/layout";
import aboutData from "~content/pages/about.json"
import Container from "~components/container/container";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import Title from "~components/title/title";
import Content from "~components/content/content";
import Section from "~components/section/section";
import SEO from "~components/seo";

const About = () => (
  <Layout>

    <SEO title={aboutData.title} />

    <Section options={{ marginBottom: true }}>
      <Container>

        <GridContainer>
          <Row>

            <Col md={12} lg={9}>
              <Title>{aboutData.title}</Title>
              <Content content={aboutData.description} />
            </Col>

          </Row>
        </GridContainer>



      </Container>
    </Section>
  </Layout>
)

export default About
