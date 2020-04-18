import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
// mui stuff
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
// images
import bitConnect from "../images/bit-connect.png"
import bitBlogs from "../images/bit-blogs.png"

import "../styles/App.scss"

const IndexPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index)
  }

  return (
    <Layout>
      <SEO title="My Projects" />
      <Container className="projects-page d-flex justify-content-center">
        <Row>
          <Col md={4}>
            <List className="list">
              <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
              >
                <ListItemText
                  primary="BITCONNECT"
                  secondary="BitConnect is a social media app hosted on firebase"
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
              >
                <ListItemText
                  primary="BIT BLOGS"
                  secondary="Bit Blogs is a fictious blog application made with gatsby"
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
              >
                <ListItemText
                  primary="BIT POSTS"
                  secondary="Bit Posts is a social networking app made using MERNG stack"
                />
              </ListItem>
            </List>
          </Col>
          <Col md={8} sm={12}>
            <Row>
              {selectedIndex === 0 ? (
                <img src={bitConnect} alt="bitConnect" className="image" />
              ) : (
                <img src={bitBlogs} alt="bitBlogs" className="image" />
              )}
            </Row>
            <Row>
              <Col className="text-center" md={6}>
                <a
                  href={
                    selectedIndex === 0
                      ? "https://bitconnect-b7b67.firebaseapp.com/"
                      : "https://peaceful-montalcini-173481.netlify.app/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </Col>
              <Col className="text-center" md={6}>
                <a
                  href={
                    selectedIndex === 0
                      ? "https://github.com/mdfaizan7/react-bitConnect-client"
                      : "https://github.com/mdfaizan7/gatsby-bit-blogs"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Repository
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
        a
      </Link>
    </Layout>
  )
}

export default IndexPage
