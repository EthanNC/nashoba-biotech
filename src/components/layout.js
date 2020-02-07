import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import Header from "./header"
import Footer from "./footer"
import Logo from "../images/logo.png"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
      style={{
        backgroundImage: `url(${Logo})`,
        position: "Fixed",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed",
        backgroundPosition: `center top`,
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.2,
      }}
    />
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
