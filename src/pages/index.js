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
      <img style={{margin:0, borderRadius: '10px' }} src={image2}/>
<p>There are two salient features of the TME that are worth noting as regards oncogenesis, tumor growth, and metastasis. First, the TME is crucial for disease progression which relies upon a carefully orchestrated molecular conversation between cancerous and non-cancerous tumor elements to achieve its goals. For example, both cancer cells and their non-cancerous tumor constituents of the TME act together to suppress the normal immune response that would otherwise hold a cancer in check or destroy it. Second, just as cancer is made up of hundreds of different, yet related, diseases, the TME is distinct in its cellular and constituent components in different cancers. Important current concepts in cancer, such as the existence of “hot” or “cold” tumors that respond differently to immunotherapies, have distinct TMEs. For both of these reasons, the TME is an active target in the search for new cancer therapies. </p>
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
<p>Sugars - covalently linked to proteins, lipids, and each other - are termed glycans and are important molecular participants in cancer, including as components of the TME. Here, glycans participate in a distinct set of molecular conversations by encoding information required for disease progression within their structural details – information that is decoded by a set of proteins called lectins that are differentially expressed on cancer cells and in the TME.  An emerging body of scientific research supports the concept that by altering the glycans in a tumor one can disrupt the ongoing cancer-enabling molecular conversations. </p>
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
      <p>Nashoba Biotechnology, LLC is founded on the concept that altering specific glycan structures will disrupt essential molecular conversations and create a new class of anti-cancer drugs. The specific approach embraced by the Company is termed precision glyco-editing of the TME. This approach involves inducing specific structural changes in a small subset of TME glycans and has rarely been exploited before.  However, this approach is now supported by studies showing that Nashoba’s specific molecular targets are likely inverse prognostic indicators of overall survival in various cancers. </p>
      <img style={{margin:0, borderRadius: '10px'}} src={image3}/>
      <p>Nashoba Biotechnology, LLC is re-developing a therapeutic candidate that has previously shown safety and efficacy in early stage phase II clinical trials in metastatic cancer. The Company believes that, if used in combination with approved immunotherapies such as anti-VEGF antibodies or ICIs, its lead clinical candidate will increase the durable response rates of these agents by precision glyco-editing of the TME. Thus, we envisage our clinical candidate as a “helper drug” that assists approved therapeutics in achieving even better clinical outcomes for cancer patients. </p>
      
      </div>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
