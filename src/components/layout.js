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
import "./layout.scss"
import { Container } from "react-bootstrap"

const Layout = ({ children, showHeader = true }) => {
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
    <>
      {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
      <Container>
        <main>{children}</main>
        <footer>
          <hr />© Mutual Aid New Zealand (MANZ) {new Date().getFullYear()} -
          Built with ❤️ by volunteers.{" "}
          <a
            href="https://github.com/MutualAidNZ/org/issues/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interested in helping out?
          </a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
