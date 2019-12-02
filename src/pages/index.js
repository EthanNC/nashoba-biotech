import React from "react"
import Layout from "../components/layout"
import Logo from "../images/logo.png"
import { Container, Row, Column} from "../components/layoutComponents"
import SEO from "../components/seo"
import Button from "../components/button"
import Founder from "../components/founder"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p style={{ textAlign: "center", maxWidth: 440 }}>
        Cancer research focused on developing inmmunotherapies
      </p>
    <div
      style={{
        backgroundImage: `url(${Logo})`,
        position: "Fixed",
        align: "center",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.2,
      }}
    />
    <div style={{ textAlign: "center", maxWidth: 440 }}>
      <Button>Read Our Research</Button>
    </div>
    <div style={{ textAlign: "center", maxWidth: 440, margin: "25px 50px"}}>
    <h2>Founders</h2>
    {/* <Row> 
      <Column>
        <Founder/>
      </Column>
      <Column>
        Founder 2
      </Column>
    </Row> */}
    <Founder/>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
