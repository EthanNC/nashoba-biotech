import React from 'react'
import Layout from "../../components/layout"
import { COLORS, GRADIENT, BORDER_RADIUS } from '../../components/constants'
import { Container } from "../../components/layoutComponents"
import { Link } from "gatsby"
import image from "../../images/JC.png"

const JC = () => {
    return (
        <Layout>
            <Container>
                <h3 style={{padding: 0}}>Jeremy P. Carver, Ph.D., Chair of the Board of Directors </h3>
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
                    Dr. Carver is an experienced biotechnology entrepreneur; Besides his role at Nashoba Biotechnology, he is currently the Co-Founder, President and CEO of the International Consortium on Anti-Virals (ICAV-CITAV), an organization of over 500 scientists from 38 countries dedicated to discovering and delivering low-cost anti-viral drugs to low and middle income countries. Dr. Carver co-founded ICAV, with offices near Montreal, with Dr. Michel Chrétien in June 2004. Previously, Dr Carver was the Founding President, CEO and CSO of GlycoDesign Inc (1994 -2002), a biotech company listed on the TSE in 2000 and which received the Friesen-Rygiel Award in 2001.
                    </p>
                    <p>He is an Emeritus Professor at the University of Toronto; an Honorary Conjunct Professor at Trent University; and, an Adjunct Professor at York University in Toronto. He was a Professor (1968-94) and Associate Dean Basic Science (1989-1992), Faculty of Medicine, University of Toronto. As Associate Dean he was central to the creation of a critical mass in Structural Biology in the Faculty of Medicine.</p>
                    <p>Dr. Carver received a Ph.D. (Biophysics, Harvard University) and an Hons. B.A. (Physics, University of Toronto), a Helen Hay Whitney Postdoctoral Fellowship (Oxford University) and a World Trade Visiting Scientist Award (IBM Watson Labs). His research specialties include biotechnology, glycobiology, company creation, and drug development.</p>
                </div>
                <Link to="/">Go back to Founders Page</Link>
            </Container>
        </Layout>
    )
}

export default JC;