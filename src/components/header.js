import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typography from "@material-ui/core/Typography"
import SVGIcon from "./svgIcon.js"

import "../styles/App.scss"

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="icon">
          <AniLink to="/" cover direction="right" bg="#98b8ec">
            <SVGIcon />
          </AniLink>
        </div>
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
