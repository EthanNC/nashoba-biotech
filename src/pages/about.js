import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

import {COLORS, BORDER_RADIUS, GRADIENT } from "../components/constants"

const SecondPage = () => (
  <Layout>
    <Container>
      <SEO title="Page two" />
      <h2>About Our Science</h2>
      <div     style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 600,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      margin:"2rem auto",
    }}>
<p>Immunotherapies are revolutionizing cancer treatment and outcomes. Approved drugs targeting the immune status of the tumour are already commanding billion-dollar markets.  This latest evolution in this class of drugs has been termed “Immunotherapy 2.0” by the American Society of Clinical Oncology and features a set of therapies known as immune checkpoint inhibitors (ICIs). These drugs reactivate anti-tumor immune responses, for example “releasing the brakes” on T-cells in the suppressive environment of a tumor. Most significantly, ICIs have achieved clinical results rarely seen before in cancer therapy: long term survival that is remarkably durable in patients with a wide variety of tumors. However, only a fraction of treated patients achieved these durable responses - generally only 20 to 30%. As a result, a major effort is underway to increase this fraction of durably responding patients by combining ICIs with other drugs whose mechanisms of action are complementary. </p>
      </div>
      <h2>Our Mission</h2>
      <div     style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 600,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      margin:"2rem auto",
    }}>
<p>Nashoba Biotechnology, LLC is re-developing a clinical stage cancer therapeutic that has shown efficacy in early stage phase II clinical trials in metastatic renal cancer. There is now emerging evidence that when used in combination with approved immunotherapies, such as anti-VEGF antibodies or ICIs, Nashoba Biotech's NB-0039 will increase the durable response rates of these agents by precision editing of the tumor microenvironment. Thus, NB-0039 is a “helper drug” that assists approved therapeutics in achieving better clinical outcomes in cancer.</p>
      
      </div>
      <Link to="/">Go back to the homepage</Link>
      
    </Container>
  </Layout>
)

export default SecondPage
