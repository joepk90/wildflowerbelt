import React from "react"

import Layout from "~components/layout/layout";
import Container from "~components/container/container";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import Title from "~components/title/title";
import Section from "~components/section/section";
import SEO from "~components/seo";

const OrderConfirmation = () => (
    <Layout>

        <SEO title="Order Confirmation" />

        <Section options={{ marginLarge: true, paddingLarge: true }}>
            <Container>

                <GridContainer>
                    <Row>

                        <Col md={12} lg={9}>
                            <Title>Thanks you for your purchase</Title>

                            <p>You should recieve an email from Paypal with your order details and your product will be dispatched with within the next 1-2 business days.</p>

                            <p>For any further enquiries, or if you would like to cancel the order, please get in touch.</p>

                        </Col>

                    </Row>
                </GridContainer>

            </Container>
        </Section>
    </Layout>
)

export default OrderConfirmation
