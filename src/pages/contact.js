import React from "react"

import Layout from "~components/layout/layout";
import contactData from "~content/contact.json"
import Container from "~components/container/container";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import Title from "~components/title/title";
import Content from "~components/content/content";
import Section from "~components/section/section";
import SEO from "~components/seo";

const Contact = () => (
    <Layout>

        <SEO title={contactData.title} />

        <Section options={{ marginBottom: true }}>
            <Container>

                <GridContainer>
                    <Row>

                        <Col md={12} lg={9}>
                            <Title>{contactData.title}</Title>
                            <Content content={contactData.description} />
                        </Col>

                    </Row>
                </GridContainer>

            </Container>
        </Section>
    </Layout>
)

export default Contact
