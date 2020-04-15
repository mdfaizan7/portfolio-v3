import React from "react"
// import { Link } from "gatsby"
import Typical from "react-typical"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyImg from "../images/my-img.jpg"

import "../styles/App.scss"

const IndexPage = () => {
  const steps = [
    "I'm a Student 🎓",
    1000,
    "I'm a Programmer 💻",
    1000,
    "I'm a ☕ lover",
    1000,
    "I'm a pretty fast learner and always intrested in learning new technologies🤓",
    1000,
    "I'm a Thinker 💡",
    1000,
    "Coding is my passion 🔥",
    1000,
    "I think one of my values is the ability to resolve problems",
    1000,
    "I'm a Developer ♨️",
    1000,
    "I'm a Rapper (wannabe)",
    1000,
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <Container className="landing-content">
        <Row>
          <Col md={4}>
            <img src={MyImg} alt="my image" className="image" />
          </Col>
          <Col md={8}>
            {" "}
            <h1 className="header">
              <div className="first">Hi,</div>{" "}
              <div className="second">I am Faizan</div>
            </h1>
            <p>
              <Typical loop={Infinity} wrapper="b" steps={steps} />
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

//  <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
