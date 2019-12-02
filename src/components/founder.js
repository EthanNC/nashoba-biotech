import React from 'react'
import Avatar from '../images/avatar.png'
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Founder = ({image, name, link}) => (
    <Container>
        <div>
            <img style={{maxWidth: "100px"}} src={Avatar}/>
            <h2>Dale Cumming</h2>
        </div>
    </Container>
)

const StyledFounder = styled(Founder)`
  color: var(--black);
  margin-bottom: 1rem;
  h1 {
    display: block;
    margin: 0 auto;
  }
  img{
    border-radius: 50%;
    width: 10px;
  }
  margin: 0 auto;
`
export default StyledFounder