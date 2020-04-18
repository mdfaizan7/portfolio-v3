import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingEffect from "../components/typingEffect"
import { Container, Row, Col } from "reactstrap"
import MyImg from "../images/my-img.jpg"

import "../styles/App.scss"

const IndexPage = () => {
  const steps = [
    "I'm a Student 🎓",
    "I'm a Programmer 💻",
    "I'm a ☕ lover",
    "I'm a pretty fast learner and always intrested in learning new technologies 🤓",
    "I'm a Thinker 💡",
    "Coding is my passion 🔥",
    "I think one of my values is the ability to resolve problems",
    "I'm a Developer ♨️",
    "I'm a Rapper (wannabe)",
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="landing-content">
        <Row>
          <Col md={4}>
            <img src={MyImg} alt="profile" className="image" />
          </Col>
          <Col md={8}>
            {" "}
            <h1 className="header">
              <div className="first">Hi,</div>{" "}
              <div className="second">I am Faizan</div>
            </h1>
            <p>
              <TypingEffect />
            </p>
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
