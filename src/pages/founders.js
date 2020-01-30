import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Row} from "../components/layoutComponents"
import SEO from "../components/seo"
import Founder from "../components/founder"

import DC from "../images/DC.png"
import RS from "../images/RS.png"
import PM from "../images/PM.png"
import JC from "../images/JC.png"
import RC from "../images/RC.png"

const Founders = () => (
  <Layout>
    <Container>
      <SEO title="Founders" />
    <div style={{ textAlign: "center", maxWidith:700}}>
    <h1>Meet Our Founders</h1>
    <Row>
      {/* <Column> */}
        <Founder name="Ray Camphausen" title="CEO" image={RC} link="https://www.linkedin.com/in/ray-camphausen-0173352/"/>
      {/* </Column> */}
      {/* <Column> */}
        <Founder name="Patrick Michaud" title="COO" image={PM} link="https://www.linkedin.com/in/patrick-michaud-2489a126/"/>
      {/* </Column> */}
    </Row>

    <Row> 
      {/* <Column> */}
        <Founder name="Dale Cumming" title="CSO" image={DC} link="https://www.linkedin.com/in/dalecumming"/>
      {/* </Column> */}
      {/* <Column> */}
        <Founder name="Rajan N. Shah" title="CCO" image={RS} link="https://www.linkedin.com/in/rajanglyco/"/>
      {/* </Column> */}
    </Row>

    <Row> 
        <Founder name="Jeremy P. Carver" title="Chair, BoD" image={JC} link="https://www.linkedin.com/in/jeremy-carver-441a696/"/>
    </Row>
 

    </div>
      <Link to="/">Go back to the homepage</Link>
      
    </Container>
  </Layout>
)

export default Founders
