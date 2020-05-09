import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingEffect from "../components/typingEffect"
import Grid from "@material-ui/core/Grid"
import MyImg from "../images/my-img.jpg"

import "../styles/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="landing-content"
      spacing={5}
    >
      <Grid item>
        <img src={MyImg} alt="profile" className="image" />
      </Grid>
      <Grid item>
        <h1 className="header">
          <div className="first">Hi!</div>
          <div className="second">I am Faizan</div>
        </h1>
        <TypingEffect />
      </Grid>
    </Grid>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default IndexPage
