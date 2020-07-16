import React from 'react'
import SideNav from "../../components/SideNav"
import { Grid, Header, Item, List } from "semantic-ui-react"
import "../../css/forSafetyPage.css"
import safetyPageData from "../../assets/data/safetyPageData"
import TopIntro from "../../components/TopIntro"
import Main from "../../components/Main"

class SafetyPage extends React.Component {
    render() {
        const introData = safetyPageData.intro
        const mainData = safetyPageData.main
        return <Grid>
            <Grid.Row>
                <Grid.Column width={3} style={{ height: "100%" }}>
                    <SideNav sideNavData={mainData}></SideNav>
                </Grid.Column>
                <Grid.Column width={13}>
                    <div id="safetyPageContentWrapper">

                        <TopIntro introData={introData}></TopIntro>
                        
                        <Main mainData={mainData}></Main>

                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

export default SafetyPage