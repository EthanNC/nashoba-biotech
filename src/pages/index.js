import React from "react"
import Layout from "../components/layout"
import Logo from "../images/logo.png"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p style={{ textAlign: "center", maxWidth: 440 }}>
        Cancer research focused on developing inmmunotherapies
    </p>
    <Button style={{textAlign:"center"}}>Read Our Research</Button>
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
    </Container>
  </Layout>
)

export default IndexPage
