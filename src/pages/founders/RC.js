import React from 'react'
import Layout from "../../components/layout"
import { COLORS, GRADIENT, BORDER_RADIUS } from '../../components/constants'
import { Container } from "../../components/layoutComponents"
import {Link} from "gatsby"
import image from "../../images/RC.png"

const RC = () => {
    return (
        <Layout>
            <Container>
                <h3>Ray T. Camphausen, Ph.D., CEO</h3>
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
                    Dr. Ray Camphausen has more than 30 year of industrial experience in the discovery, research, and early development of biotechnology and pharmaceutical candidates. Prior to joining Nashoba Biotechnology, Dr. Camphausen served as Associate Vice President, Research Fellow, and Director for 15 years at Bristol Myers-Squibb and Adnexus Therapeutics, a biotech company acquired by BMS in 2007. His focus at BMS/Adnexus was on the discovery and protein engineering of a variety of therapeutic candidates, including antibodies, alternative scaffold proteins, and other biologics in the areas of cancer, inflammation, and cardiovascular disease. In 2002, Dr. Camphausen served as Vice President, Research and Discovery at Thios Pharmaceutics, Inc., a biotech company focused on the discovery and development of small molecule and protein inhibitors in the general area of carbohydrate and protein sulfation. From 1987 to 2002, Dr. Camphausen rose from a research scientist to Associate Director at Genetics Institute, Inc./Wyeth/Pfizer. He researched the structure and function of a variety of protein-carbohydrate interactions that lead to the advancement of both glycoprotein and small molecule therapeutic candidates.
                    </p>
                    <p>Dr. Camphausen received his Ph.D. in Microbiology from Colorado State University and a B.A. in Biology from University of California, San Diego. He is the co-author and co-inventor of more than 75 publications, scientific presentations, and patents.</p>
                </div>
                <Link to="/">Go back to Founders Page</Link>
            </Container>
        </Layout>
    )
}

export default RC;