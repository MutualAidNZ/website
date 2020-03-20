/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Alert } from "react-bootstrap"

import Header from "./header"
import "./layout.scss"

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
        <hr className="my-4" />
        <Alert variant={"warning"} style={{ fontSize: 16 }}>
          <strong>Disclaimer:</strong> MANZ is a support network for people
          organising in their communities. Local support groups are not directly
          affiliated with MANZ and we are not accountable for their activities.
          MANZ is run entirely by volunteers and not medical professionals. For
          up to date medical advice you should continue to check the{` `}
          <a href="https://covid19.govt.nz/" rel="noopener noreferrer">
            official COVID-19 website
          </a>{" "}
          for further announcements.
        </Alert>
        <footer className="mb-4 text-muted" style={{ fontSize: 14 }}>
          <hr />© Mutual Aid New Zealand (MANZ) {new Date().getFullYear()} -
          Built with ❤️ by volunteers.{" "}
          <a
            href="https://github.com/MutualAidNZ/org/issues/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our tech team!
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
