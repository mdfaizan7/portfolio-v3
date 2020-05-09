import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import SkillCard from "../components/skillCard"
import { skills } from "../util/skillsItems"

import "../styles/App.scss"

const Skills = () => (
  <Layout>
    <SEO title="My Skills" />
    <Container className="skills-page">
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {skills.map(({ url, caption }) => (
          <Grid item lg={3} key={url} md={4} sm={6}>
            <SkillCard url={url} caption={caption} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default Skills
