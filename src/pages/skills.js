import React from "react"
import { Link } from "gatsby"
// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"
// mui icons
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
// utils
import { skills } from "../util/skillsItems"

import "../styles/App.scss"

const Skills = () => {
  React.useEffect(() => (window.location = "https://mdfaizan7.github.io"))

  return (
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
}
export default Skills
