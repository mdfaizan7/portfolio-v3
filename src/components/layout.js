/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Container>
        <Header />
        <main className="">{children}</main>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
