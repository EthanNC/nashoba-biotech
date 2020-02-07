import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import Image from "../components/image"

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <div className="logo"><Image/></div>
      <h1>
        {siteTitle}
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
    text-align: center;
  }
  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`

export default StyledHeader
