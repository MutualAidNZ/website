/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Container, Alert, Row, Col } from "react-bootstrap"

import Layout from "./layout"
import { Link } from "gatsby"

const SidebarLayout = ({ children, showHeader = true }) => {
  return (
    <>
      <Layout>
        <Row>
          <Col md={3}>
            <Link>Home</Link>
            <Link>Resources</Link>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Layout>
    </>
  )
}

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarLayout
