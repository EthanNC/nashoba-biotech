import React from "react"
import Layout from "../components/layout"
import { Container, Row, Column} from "../components/layoutComponents"
import SEO from "../components/seo"
import Button from "../components/button"
import {Link} from "gatsby"

import {COLORS, GRADIENT, BORDER_RADIUS} from '../components/constants'

import image1 from '../images/about_image_1.png'
import image2 from '../images/about_image_2.png'
import image3 from '../images/about_image_3.png'
import image4 from '../images/about_image_4.png'
import image5 from '../images/about_image_5.png'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p style={{ textAlign: "center", maxWidth: 700 }}>
      Precision Glyco-editing of the Tumor Microenvironment to Create a New Class of Anti-cancer Drugs 
      </p>
    <div style={{ textAlign: "center", maxWidth: 700 }}>
    {/* <img style={{margin:0, borderRadius: '10px'}} src={image1}/> */}
      <Link to="/founders">
      <Button>
        Our Founders
      </Button>
      </Link>
      

    </div>
    <div style={{ maxWidth: 700}}>
    <h2 style={{textAlign:"center"}}>About Our Science</h2>
      <div     style={{
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
      <p>Immunotherapies are revolutionizing cancer treatment and patient outcomes. Approved drugs targeting the immune status of the tumor are already commanding billion-dollar markets.  One example of these new medicines is a set of therapies known as immune checkpoint inhibitors (ICIs). These inhibitors reactivate anti-tumor immune responses, for example “releasing the brakes” on T-cells in the suppressive environment of a tumor.</p>
      <figure>
      <img style={{margin:0, borderRadius: '10px'}} src={image5}/>
      {/* <figcaption>placeholder caption</figcaption> */}
      <p>Most significantly, ICIs have achieved clinical results rarely seen before in cancer therapy: long term survival that is remarkably durable in patients in a wide variety of tumor types. However, only a fraction of treated patients achieves these durable responses - generally only 20 to 30%. As a result, there is great interest in increasing the fraction of patients that survive by combining ICIs with other drugs.</p>
      <p>For its lead effort, Nashoba Biotechnology is re-developing a small molecule drug candidate that has previously shown safety and efficacy in phase II clinical trials in metastatic cancer. The Company believes this clinical candidate can reprogram the tumor microenvironment and help already approved immunotherapies in achieving even better clinical outcomes for cancer patients – more patients experiencing a durable overall survival benefit.</p>
      </figure>
    </div>
    <div     style={{
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
    <img style={{margin:0, borderRadius: '10px'}} src={image1}/>
    <p>The success of ICIs has highlighted the important role in cancer progression not just of cancer cells themselves but also of the other cells and constituents that comprise a tumor. Examples of these non-cancerous components of a tumor include the extracellular matrix, immune cells, specialized fibroblasts, and endothelial cells. Collectively, these non-cancerous tumor components comprise what is termed the tumor microenvironment (TME). </p>
    </div>
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
        <img style={{margin:0, borderRadius: '10px'}} src={image2}/>
        <p>The TME is crucial for cancer progression because the “success” of cancer relies upon a carefully orchestrated molecular conversation between cancerous and non-cancerous tumor components. For example, the TME and cancer cells act together to suppress the normal immune response that would otherwise hold a cancer in check or destroy it. </p>
        <p>The TME is not the same in all tumors and can change over time, even in a single tumor type.  “Hot” or “cold” tumors, an important concept in cancer used to explain why certain tumor types respond differently to immunotherapies, have distinct TMEs. Recent research has led to the new idea that reprogramming the TME is an exciting new approach to enhance the efficacy of existing therapeutics.</p>
    </div>
      <div     style={{
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
      <img style={{margin:0, borderRadius: '10px' }} src={image4}/>
      <p>A unique approach for reprogramming the TME is by altering one of its major components, glycans. Glycans are carbohydrates (sugars) covalently linked to proteins, lipids, or each other. Glycans play an important role in cancer because they participate in a special set of molecular conversations within the TME between cancerous and non-cancerous tumor components, conversations that result in the growth and proliferation of cancer cells. A growing body of scientific studies support a new idea: that by altering these glycans, one can reprogram the TME in unique ways. For example, by altering a specific set of glycan structures in the TME, one can convert “cold” tumors to “hot”; the desired outcome to increase the efficacy of ICIs.
</p>
      </div>
      <h2 style={{textAlign:"center"}}>Our Mission</h2>
      <div     style={{
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
      
      <img style={{margin:0, borderRadius: '10px'}} src={image3}/>
      <p>Nashoba Biotechnology is founded on the concept that altering specific glycan structures in the TME will alter essential molecular conversations required for cancer growth and progression. The Company has already identified multiple new targets from published patient data that shows that blocking these targets is linked to enhanced overall survival. Ultimately, our goal is to provide a wealth of new first-in-class medicines that, when used together with other therapeutic agents, enhance patient survival across a variety of cancers.</p>
      
      </div>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
