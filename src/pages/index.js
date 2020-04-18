import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingEffect from "../components/typingEffect"
import { Container, Row, Col } from "reactstrap"
import MyImg from "../images/my-img.jpg"

import "../styles/App.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="landing-content">
        <Row>
          <Col lg={4}>
            <img src={MyImg} alt="profile" className="image" />
          </Col>
          <Col>
            <h1 className="header">
              <div className="first">Hi,</div>{" "}
              <div className="second">I am Faizan</div>
            </h1>
            <TypingEffect />
          </Col>
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
