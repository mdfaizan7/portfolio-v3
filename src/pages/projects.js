import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/App.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container className="projects-page">
        <Row>
          <Col md={4}>Projects</Col>
          <Col md={8}>Projects screenshot</Col>
        </Row>
      </Container>
      <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
        a
      </Link>
    </Layout>
  )
}

//  <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
