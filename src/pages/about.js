import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import SocialLinks from "../components/socialLinks"

import "../styles/App.scss"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-page container">
      <div className="row">
        <div className="col mb-5">
          <p>
            My name is{" "}
            <span style={{ fontSize: "1.2rem" }}>Mohammad Faizan Azim.</span>{" "}
            <br /> I am a Computer Science undergrad pursuing my B.Tech from{" "}
            <a
              href="http://www.bitdurg.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhilai Institute of Technology, Durg.
            </a>
          </p>
          <p>
            I am a pretty fast learner and always interested in new
            technologies. I love to solve problems, analyze things, and observe
            patterns. I enjoy creating new interesting applications and learn
            more things. I think one of my values is to solve problems by
            dividing them into smaller problems to make things simpler. I love
            to play with a problem so I can get different solutions for it.
          </p>
          <p>I am currently looking for work and you can contact me below.</p>
        </div>
      </div>
      <SocialLinks />
    </div>
    <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
      a
    </Link>
  </Layout>
)

export default About
