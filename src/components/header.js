import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typography from "@material-ui/core/Typography"
import SVGIcon from "./svgIcon.js"

import "../styles/App.scss"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <Navbar light expand="lg">
            <div className="container">
              <NavbarBrand>
                <div className="icon">
                  <AniLink to="/" cover direction="right" bg="#98b8ec">
                    <SVGIcon />
                  </AniLink>
                </div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
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
                  </NavItem>
                  <NavItem>
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
                  </NavItem>
                  <NavItem>
                    <Typography
                      color="inherit"
                      className="navlink"
                      variant="h5"
                      component={AniLink}
                      to="/about"
                      cover
                      bg="#98b8ec"
                      duration={2}
                      direction="down"
                    >
                      About Me
                    </Typography>
                  </NavItem>
                </Nav>
              </Collapse>{" "}
            </div>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default Header

{
  /* <div className="navbar">
        <Navbar expand="md" light>
          <div className="container">
            <NavbarBrand>
              <div className="icon">
                <AniLink to="/" cover direction="right" bg="#98b8ec">
                  <SVGIcon />
                </AniLink>
              </div>
            </NavbarBrand>
            
          </div>
        </Navbar>{" "}
      </div> */
}
