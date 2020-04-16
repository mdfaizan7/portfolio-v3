import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import "../styles/App.scss"
import bitConnect from "../images/bit-connect.png"
import bitBlogs from "../images/bit-blogs.png"
const IndexPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index)
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <Container className="projects-page">
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
                <h6>BIT POSTS</h6>
              </ListItem>
            </List>
          </Col>
          <Col md={8}>
            {selectedIndex === 0 ? (
              <img src={bitConnect} className="image" />
            ) : (
              <img src={bitBlogs} className="image" />
            )}
          </Col>
        </Row>
      </Container>
      <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
        a
      </Link>
    </Layout>
  )
}

//  <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
