import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
// mui stuff
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
// images
import bitConnect from "../images/bit-connect.png"
import bitBlogs from "../images/bit-blogs.png"
import bitPosts from "../images/bit-posts.png"

import "../styles/App.scss"

const IndexPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index)
  }

  return (
    <Layout>
      <SEO title="My Projects" />
      <Container className="projects-page">
        <Grid container spacing={6}>
          <Grid item lg={4} sm={12}>
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
          </Grid>
          <Grid item lg={8} sm={12}>
            <Grid container>
              {selectedIndex === 0 ? (
                <img src={bitConnect} alt="bitConnect" className="image" />
              ) : selectedIndex === 1 ? (
                <img src={bitBlogs} alt="bitBlogs" className="image" />
              ) : (
                <img src={bitPosts} alt="bitBlogs" className="image" />
              )}
            </Grid>
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              direction="row"
            >
              <Grid item md={6}>
                <a
                  href={
                    selectedIndex === 0
                      ? "https://bitconnect-b7b67.firebaseapp.com/"
                      : selectedIndex === 1
                      ? "https://peaceful-montalcini-173481.netlify.app/"
                      : "https://github.com/mdfaizan7/merng-bitposts-client"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedIndex === 2 ? "Client-side Repository" : "Live Demo"}
                </a>
              </Grid>
              <Grid item md={6}>
                <a
                  href={
                    selectedIndex === 0
                      ? "https://github.com/mdfaizan7/react-bitConnect-client"
                      : selectedIndex === 1
                      ? "https://github.com/mdfaizan7/gatsby-bit-blogs"
                      : "https://github.com/mdfaizan7/merng-bitposts-server"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedIndex === 2
                    ? "Server-side Repository"
                    : "Code Repository"}
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Link to="/projects" style={{ color: "transparent", fontSize: "0rem" }}>
        a
      </Link>
    </Layout>
  )
}

export default IndexPage
