import React from "react"
import Layout from "../components/layout"
import { Container, Row, Column} from "../components/layoutComponents"
import SEO from "../components/seo"
import Button from "../components/button"
import Founder from "../components/founder"
import {Link} from "gatsby"

import DC from "../images/DC.png"
import RS from "../images/RS.png"
import PM from "../images/PM.png"
import JC from "../images/JC.png"
import RC from "../images/RC.png"
const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p style={{ textAlign: "center", maxWidth: 440 }}>
      Precision Glyco-editing of the Tumor Microenvironment to Create a New Class of Anti-cancer Drugs 
      </p>
    <div style={{ textAlign: "center", maxWidth: 440 }}>
      <Link to="/about">
      <Button>
        Read About Our Science
      </Button>
      </Link>
      

    </div>
    <div style={{ textAlign: "center", maxWidth: 440}}>
    <h2>Founders</h2>
    <Row>
      <Column>
        <Founder name="Ray Camphausen" title="CEO" image={RC} link="https://www.linkedin.com/in/ray-camphausen-0173352/"/>
      </Column>
      <Column>
        <Founder name="Patrick Michaud" title="COO" image={PM} link="https://www.linkedin.com/in/patrick-michaud-2489a126/"/>
      </Column>
    </Row>

    <Row> 
      <Column>
        <Founder name="Dale Cumming" title="CSO" image={DC} link="https://www.linkedin.com/in/dalecumming"/>
      </Column>
      <Column>
        <Founder name="Rajan N. Shah" title="CCO" image={RS} link="https://www.linkedin.com/in/rajanglyco/"/>
      </Column>
    </Row>

    <Row> 
        <Founder name="Jeremy P. Carver" title="Chair, BoD" image={JC} link="https://www.linkedin.com/in/patrick-michaud-2489a126/"/>
    </Row>
 

    </div>
    </Container>
  </Layout>
)

export default IndexPage
