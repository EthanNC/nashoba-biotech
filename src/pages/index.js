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
      <Link to="/about">
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
<p>Immunotherapies are revolutionizing cancer treatment and outcomes. Approved drugs targeting the immune status of the tumor are already commanding billion-dollar markets. This latest evolution in this class of drugs has been termed “Immunotherapy 2.0” by the American Society of Clinical Oncology and features a set of therapies known as immune checkpoint inhibitors (ICIs). These drugs reactivate anti-tumor immune responses, for example “releasing the brakes” on T-cells in the suppressive environment of a tumor. Most significantly, ICIs have achieved clinical results rarely seen before in cancer therapy: long term survival that is remarkably durable in patients with a wide variety of tumors. However, only a fraction of treated patients achieved these durable responses -generally only 20 to 30%. As a result, a major effort is underway to increase this fraction of durably responding patients by combining ICIs with other drugs whose mechanisms of action are complementary </p>
<figure>
<img style={{margin:0, borderRadius: '10px'}} src={image5}/>
<figcaption>placeholder caption</figcaption>
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
<p>The success of ICIs in cancer therapy has highlighted the important role in disease progression not just of cancer cells themselves but also of the other cells and constituents that comprise a tumor. Examples of these non-cancerous components of a tumor include the extracellular matrix, immune cells, specialized fibroblasts, and endothelial cells. Collectively, these non-cancerous tumor components comprise what is termed the tumor microenvironment (TME)</p>
<img style={{margin:0, borderRadius: '10px'}} src={image1}/>
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
<p>There are two salient features of the TME that are worth noting asregards oncogenesis,tumor growth,and metastasis. First, the TME is crucial for disease progression which relies upon a carefully orchestrated molecular conversation between cancerous and non-cancerous tumor elements to achieve its goals. For example, both cancer cells and their non-cancerous tumor constituentsof the TMEact together to suppress the normal immune response that would otherwise hold a cancer in check or destroy it. Second, just as cancer is made up of hundredsof different, yet related, diseases, the TME is distinctin its cellular and constituent componentsin different cancers. Important current concepts in cancer, such as the existence of “hot” or “cold” tumors that respond differently to immunotherapies, have distinct TMEs. For both of these reasons, the TME is an active target in the search for new cancer therapies</p>
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
      <p>Nashoba Biotechnology, LLC is re-developing a clinical stage cancer therapeutic that has shown efficacy in early stage phase II clinical trials in metastatic renal cancer. There is now emerging evidence that when used in combination with approved immunotherapies, such as anti-VEGF antibodies or ICIs, Nashoba Biotech's NB-0039 will increase the durable response rates of these agents by precision editing of the tumor microenvironment. Thus, NB-0039 is a “helper drug” that assists approved therapeutics in achieving better clinical outcomes in cancer.</p>
      
      </div>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
