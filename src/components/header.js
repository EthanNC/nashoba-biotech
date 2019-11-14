import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import Image from "../components/image"

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <h1>
        <div to="/" style={{ textAlign: "center", maxWidth: 200 }}><Image />{siteTitle}</div>
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

const StyledHeader = styled(Header)`
  color: var(--black);
  margin-bottom: 1rem;
  h1 {
    display: block;
    margin: 0 auto;
  }
`

export default StyledHeader
