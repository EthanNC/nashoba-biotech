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
    <h2>Meet Our Founders</h2>
    <Row>
      {/* <Column> */}
        <Founder name="Ray Camphausen" title="CEO" image={RC} link="RC"/>
      {/* </Column> */}
      {/* <Column> */}
        <Founder name="Patrick Michaud" title="COO" image={PM} link="PM"/>
      {/* </Column> */}
    </Row>

    <Row> 
      {/* <Column> */}
        <Founder name="Dale Cumming" title="CSO" image={DC} link="DC"/>
      {/* </Column> */}
      {/* <Column> */}
        <Founder name="Rajan N. Shah" title="CCO" image={RS} link="RS"/>
      {/* </Column> */}
    </Row>

    <Row> 
        <Founder name="Jeremy P. Carver" title="Chair, BoD" image={JC} link="JC"/>
    </Row>
 

    </div>
      <Link to="/">Go back to the homepage</Link>
      
    </Container>
  </Layout>
)

export default Founders
