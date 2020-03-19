import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--primary)`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container className="py-4">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
