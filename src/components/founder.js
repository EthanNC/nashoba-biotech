import React from 'react'
import LI from '../images/LI.png'
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Founder = ({image, name, title, link}) => (
    <Container>
        <div>
            <img style={{maxWidth: "100px", margin:0, borderRadius: '5px'}} src={image}/>
            <h3>{name}</h3>
            <p>{title}</p>
            <a href={link} target="_blank"><img style={{maxWidth: "50px"}} src={LI}/></a>
        </div>
    </Container>
)

const StyledFounder = styled(Founder)`
  color: var(--black);
  margin-bottom: 1rem;
`
export default StyledFounder