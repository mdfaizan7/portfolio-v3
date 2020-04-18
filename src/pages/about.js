import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import "../styles/App.scss"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <Container className="about-page">
      <p>
        My name is{" "}
        <span style={{ fontSize: "1.2rem" }}>Mohammad Faizan Azim.</span> <br />{" "}
        I am a Computer Science undergrad pursuing my B.Tech from{" "}
        <a
          href="http://www.bitdurg.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bhilai Institute of Technology, Durg.
        </a>
      </p>
      <p>
        I am a pretty fast learner and always intrested in new technologies. I
        love to solve problems, to analyze things, and to observe patterns. I
        enjoy creating new intresting applications and learn more things. I
        think one of my values is to solve problems by dividing it into more
        smaller problems to make things simpler. I love to play with a problem
        so I can get different solutions for it.
      </p>

      <p>I am currently looking for work and you can contact me below.</p>

      <Row className="links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" aria-hidden="true"></i>
              <div className="link-content">Linkedin</div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mdfaizan7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
              <div className="link-content">Github</div>
            </a>
          </li>
          <li>
            <a
              href="mailto: faizaanazim@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-google" aria-hidden="true"></i>
              <div className="link-content">
                Gmail <div className="small">faizaanazim@gmail.com</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/md_faizan7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram " aria-hidden="true"></i>
              <div className="link-content">Instagram</div>
            </a>
          </li>
        </ul>
      </Row>
    </Container>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default About
