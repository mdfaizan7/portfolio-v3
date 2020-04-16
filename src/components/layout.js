/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Archia", "cursive"].join(","),
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <div className="body">
        <div className="container">
          <Header />
          <main className="">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
