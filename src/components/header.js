import React, { Component } from "react"
import "../styles/App.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Typography from "@material-ui/core/Typography"

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <Typography
          color="inherit"
          className="navlogo"
          component={AniLink}
          variant="h6"
          swipe
          direction="right"
          to="/"
        >
          logo
        </Typography>
        <div className="text ml-auto">
          <Typography
            className="navlink"
            component={AniLink}
            variant="h5"
            paintDrip
            hex="#98b8ec"
            to="/projects"
          >
            Projects
          </Typography>
          <Typography
            color="inherit"
            className="navlink"
            component={AniLink}
            cover
            bg="#98b8ec"
            variant="h5"
            to="/skills"
          >
            Skills
          </Typography>
          <Typography
            color="inherit"
            className="navlink"
            variant="h5"
            component={AniLink}
            to="/about"
          >
            About Me
          </Typography>
        </div>
      </div>
    )
  }
}

export default Header
