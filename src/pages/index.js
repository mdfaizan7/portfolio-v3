import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/App.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="header first">Hi!</h1>
    <h1 className="header second">I am Faizan</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
