import React from 'react'
import Layout from "../../components/layout"
import { COLORS, GRADIENT, BORDER_RADIUS } from '../../components/constants'
import { Container } from "../../components/layoutComponents"
import { Link } from "gatsby"
import image from "../../images/RS.png"

const RS = () => {
    return (
        <Layout>
            <Container>
                <h3>Rajan N. Shah, Ph.D., CCO</h3>
                <div style={{
                    padding: ".5rem 2.5rem",
                    color: COLORS.lightWhite,
                    fontWeight: 400,
                    background: GRADIENT,
                    borderRadius: BORDER_RADIUS,
                    borderWidth: 0,
                    cursor: "pointer",
                    margin: "2rem auto",
                    textShadow: " 2px 2px 4px #000000",
                    overflow: "auto"
                }}>
                    <p>
                    <img style={{ padding: 40, borderRadius: '5px', float: 'left'}} src={image}/>
                    Hi Rajan, please send me your bio. Cheers, Ethan
                    </p>
                </div>
                <Link to="/">Go back to Founders Page</Link>
            </Container>
        </Layout>
    )
}

export default RS;