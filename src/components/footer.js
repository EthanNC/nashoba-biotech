import React from "react"
import styled from "styled-components"
import { Row } from "./layoutComponents"
import {GRADIENT} from "./constants"

const Footer = ({ className }) => (
  <footer className={className}>
    <Row>
      <p style={{margin:"auto"}}>Nashoba Biotechnology, LLC </p>
    </Row>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: black;
  background: #E5F1DC;
  padding: 1rem 0;
  width: 100vw;
  margin: auto;
  font-size: 12px;
`

export default StyledFooter
