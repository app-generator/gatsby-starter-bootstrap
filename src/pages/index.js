import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <p>
            Blazing fast <a href="https://www.gatsbyjs.org/">GatsbyJS</a> <a href="https://getbootstrap.com/">Bootstrap</a> Starter. 
            <br />
            It includes the following packages:
            {' '}<a href="https://react-bootstrap.github.io/">React Bootstrap</a>, 
            {' '}<a href="https://react-icons.netlify.com">React Icons</a>, and 
            {' '}<a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/">Gatsby-Plugin-Sass</a>.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://developers.google.com/speed/pagespeed/insights/?url=https://gatsby-starter-bootstrap.appseed.us"
            >
              Check Ligthouse Score
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://github.com/app-generator/gatsby-starter-bootstrap"
            >
              Get Sources
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a> is a free and 
          {' '} <a href="https://en.wikipedia.org/wiki/Open_source">open source</a> framework based on 
          {' '} <a href="https://reactjs.org/">React</a>
          {' '} that helps developers build blazing fast websites and apps.
          </p>
          <p>
            Read more on <a href="https://www.gatsbyjs.org/docs/">GatsbyJS Docs</a> or play with {' '}
            a <a href="https://www.gatsbyjs.org/starters/">GatsbyJS stater</a>.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
