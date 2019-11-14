import React from "react"
import styled from "styled-components"
import { Row } from "./layoutComponents"
import {GRADIENT} from "./constants"

const Footer = ({ className }) => (
  <footer className={className}>
    <Row>
      © {new Date().getFullYear()}
      {` `}
      Nashoba Biotech LLC 
    </Row>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: black;
  background: ${GRADIENT};
  padding: 1rem 0;
  width: 100vw;
`

export default StyledFooter
