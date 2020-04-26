import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import SkillCard from "../components/skillCard"
import { skills } from "../util/skillsItems"

import "../styles/App.scss"

const Skills = () => (
  <Layout>
    <SEO title="My Skills" />
    <Container className="skills-page">
      <Row>
        {skills.map(({ url, caption }) => (
          <Col lg={3} key={url} md={4} sm={6}>
            <SkillCard url={url} caption={caption} />
          </Col>
        ))}
      </Row>
    </Container>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default Skills
