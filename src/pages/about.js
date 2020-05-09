import React from "react"
import { Link } from "gatsby"
// components
import Layout from "../components/layout"
import SEO from "../components/seo"
// mui stuff
import Container from "@material-ui/core/Container"
// mui icons
import EmailIcon from "@material-ui/icons/Email"
import InstagramIcon from "@material-ui/icons/Instagram"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

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
        I am a pretty fast learner and always interested in new technologies. I
        love to solve problems, analyze things, and observe patterns. I enjoy
        creating new interesting applications and learn more things. I think one
        of my values is to solve problems by dividing them into smaller problems
        to make things simpler. I love to play with a problem so I can get
        different solutions for it.
      </p>
      <p>I am currently looking for work and you can contact me below.</p>

      <div class="social-buttons">
        <a
          href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-buttons__button social-button social-button--linkedin"
          aria-label="LinkedIn"
        >
          <span class="social-button__inner">
            <LinkedInIcon fontSize="large" />
          </span>
        </a>
        <a
          href="https://github.com/mdfaizan7"
          target="_blank"
          rel="noopener noreferrer"
          class="social-buttons__button social-button social-button--github"
          aria-label="Github"
        >
          <span class="social-button__inner">
            <GitHubIcon fontSize="large" />
          </span>
        </a>
        <a
          href="mailto: faizaanazim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-buttons__button social-button social-button--email"
          aria-label="Email"
        >
          <span class="social-button__inner">
            <EmailIcon fontSize="large" />
          </span>
        </a>
        <a
          href="https://www.instagram.com/md_faizan7/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-buttons__button social-button social-button--instagram"
          aria-label="Instagram"
        >
          <span class="social-button__inner">
            <InstagramIcon fontSize="large" />
          </span>
        </a>
      </div>
    </Container>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default About
