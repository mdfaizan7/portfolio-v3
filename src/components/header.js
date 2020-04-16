import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import "../styles/App.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// MUI stuff
import Grid from "@material-ui/core/Grid"
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

        <Grid alignItems="flex-start" justify="flex-end" direction="row">
          <Typography
            className="navlink"
            component={AniLink}
            variant="h5"
            paintDrip
            hex="#98b8ec"
            color="inherit"
            to="/projects"
          >
            Projects
          </Typography>
          <Typography
            color="inherit"
            className="navlink"
            component={AniLink}
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
        </Grid>
      </div>
    )
  }
}

export default Header
