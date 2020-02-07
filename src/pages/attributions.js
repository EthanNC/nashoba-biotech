import React from 'react'
import Layout from '../components/layout'
import { Container} from "../components/layoutComponents"
import {Link} from "gatsby"
import image1 from '../images/about_image_1.png'
import image2 from '../images/about_image_2.png'
import image3 from '../images/about_image_3.png'
import image4 from '../images/about_image_4.png'
import image5 from '../images/about_image_5.png'

import {COLORS, GRADIENT, BORDER_RADIUS} from '../components/constants'

const attributions = () => {
    return (
        <Layout>
            <Container style={{ maxWidth: 700}}>
            <h3 style={{textAlign:"center"}}>Captions and Attributions</h3>
            <div style={{
            padding: ".5rem 2.5rem",
            color: COLORS.lightWhite,
            fontWeight: 400,
            background: GRADIENT,
            borderRadius: BORDER_RADIUS,
            borderWidth: 0,
            cursor: "pointer",
            margin:"2rem auto",
            textShadow: " 2px 2px 4px #000000"
            }}>

            <ol>
            <li>
                <img style={{margin:0, borderRadius: '10px'}} src={image5}/>
                <p>
                Figure 1: Blocking cell surface PD-1 with an immune checkpoint inhibitor (ICI) to enhance T cell antitumor activity. The left side of the image shows a cytotoxic T-Cell (red; a type of immune cell) adjacent to a cancer cell targeted for destruction (blue). Engagement of the cell surface T-cell receptor (TCR) with a cancer antigen complexed with MHC-1 is one of 2 initial steps that must occur for the T-cell to lyse the cancer cell. But here, a cell surface protein on the cancer cell, PD-L1, engages a T-cell receptor known as PD-1. This engagement sends a negative signal into the T-cell blocking the destruction of the cancer cell. But on the right, introduction of antibodies to block either PD-1 or PD-L1 (both examples of ICIs) blocks the interaction of PD-1 and PD-L1, removing the inhibitory signal into the T-cell and allowing the T-cell to destroy the cancer cell. Photo credit: iStock©
                </p>
            </li>
            <li>
                <img style={{margin:0, borderRadius: '10px'}} src={image1}/>
                <p>Figure 2: Assorted types of tumor cells labeled with different fluorescent probes. Note the striking diversity of cell types present in a tumor. Photo credit: iStock©</p>
            </li>
            <li>
                <img style={{margin:0, borderRadius: '10px'}} src={image2}/>
                <p>Figure 3: Metastatic Melanoma Cells. The ability of cancer cells to move and spread depends on the TME as well as actin-rich core structures such as the podosomes (yellow) shown here in melanoma cells. Cell nuclei (blue), actin (red), and an actin regulator (green) are also shown. Photo Credit: National Cancer Institute on Unsplash.</p>
            </li>
            <li>
                <img style={{margin:0, borderRadius: '10px' }} src={image4}/>
                <p>Figure 4: KRAS-Driven Lung Cancer. One of the great success stories of modern cancer therapy is the use of ICIs to treat some types of lung cancer patients. Photo credit: By Eric Snyder, 2015, National Cancer Institute on Unsplash.</p>
            </li>
            <li>
                <img style={{margin:0, borderRadius: '10px'}} src={image3}/>
                <p>Figure: Cancer Immunotherapy - A pseudo-colored scanning electron micrograph of an oral squamous cancer cell (white) being attacked by two cytotoxic T cells (red). Photo credit: By Rita Elena Serda, 2015, National Cancer Institute \ Duncan Comprehensive Cancer Center at Baylor College of Medicine on Unsplash.</p>
            </li>
            </ol> 

                
            </div>
            <Link to="/">Back to Homepage</Link>
            </Container>
        </Layout>
    )
}

export default attributions
