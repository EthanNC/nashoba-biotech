import React from 'react'
import Layout from "../../components/layout"
import { COLORS, GRADIENT, BORDER_RADIUS } from '../../components/constants'
import { Container } from "../../components/layoutComponents"
import { Link } from 'gatsby'
import image from "../../images/PM.png"

const PM = () => {
    return (
        <Layout>
            <Container>
                <h3>Patrick Michaud, MBA, BEng, CPA, ICD.D., COO</h3>
                <div style={{
                    padding: ".5rem 2.5rem",
                    color: COLORS.lightWhite,
                    fontWeight: 400,
                    background: GRADIENT,
                    borderRadius: BORDER_RADIUS,
                    borderWidth: 0,
                    cursor: "pointer",
                    margin: "2rem auto",
                    textShadow: " 2px 2px 4px #000000",
                    overflow: "auto"
                }}>
                    <p>
                    <img style={{ padding: 40, borderRadius: '5px', float: 'left'}} src={image}/>
                    Mr. Michaud is a 39-year executive with senior operations management, financial services and venture financing experience. Currently he serves as Chief Financial Officer of Hampton Financial Corporation, a publicly traded private-equity firm. Through its wholly owned subsidiary, Hampton Securities Limited, Hampton is actively engaged in family office, wealth management, institutional services and capital markets activities. HSL is a full-service investment dealer, regulated by IIROC and registered in Alberta, British Columbia, Manitoba, Saskatchewan, Nova Scotia, Northwest Territories, Ontario and Quebec. Previously, Mr. Michaud served as Chief Financial Officer for companies such as Clairvest Group Inc., Technicore Group of Companies, Score Media, and GlycoDesign Inc.  Mr. Michaud also serves as Managing Director of Templar Associates Inc., a financial services business providing personalized corporate finance expertise and management leadership to businesses including consulting to secure equity and equity-related capital for emerging growth companies, financial operational assistance to support initial public offerings and other financings for more developed companies.  Mr. Michaud has an MBA from the University of Western Ontario and a BEng in Civil Engineering from the Royal Military College.  Mr. Michaud is a Chartered Public Accountant and participates on a number of boards including as Chairman of the International Consortium on Antivirals.
                    </p>
                </div>
                <Link to="/">Go back to Founders Page</Link>
            </Container>
        </Layout>
    )
}

export default PM;