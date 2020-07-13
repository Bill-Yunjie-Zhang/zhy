import React from 'react'
import SideNav from "../../components/SideNav"
import { Grid, Header, Item, List } from "semantic-ui-react"
import logo from "../../assets/pics/logo.png"
import "../../css/forSafetyPage.css"
import safetyPageData from "../../assets/data/safetyPageData"
import TopIntro from "../../components/TopIntro"

class SafetyPage extends React.Component {
    render() {
        const introData = safetyPageData.intro
        const mainData = safetyPageData.main
        // console.log(introData, mainData)
        return <Grid>
            <Grid.Row>
                <Grid.Column width={3} style={{ height: "100%" }}>
                    <SideNav sideNavData={mainData}></SideNav>
                </Grid.Column>
                <Grid.Column width={13}>
                    <div id="safetyPageContentWrapper">

                        <TopIntro introData={introData}></TopIntro>

                        {/* <div id="safetyWiki" style={{ backgroundColor: "#e3e3e3", padding: "50px", paddingBottom: "80px" }}>
                            <Header as='h2' icon textAlign='center'>
                                <img src={safetyIcon} style={{ height: "100px", width: "110px" }}></img>
                                <Header.Content style={{ marginTop: "30px" }}><h1 style={{ fontSize: "30px" }}>SAFETY WIKI</h1></Header.Content>
                            </Header>
                            <hr></hr>
                            <div style={{ fontSize: "20px" }}>
                                <p>When we are doing the project, biosafety always comes first. We believe that It is always harder to keep the safety of the lab than promise, which is why it is necessary to reinforce and familiarize with the safety rules. </p>
                                <p>We strictly follow the requirements and guidelines provided by iGEM headquarters. Since we are only in a BSL 1 lab, we will not use pathogenesis, and any microorganisms that belongs to high risk levels. We would also never use parts that are harmful to any animals or our surroundings. </p>
                                <p>With procedures regarding sanitization and lab waste processing</p>
                            </div>
                        </div> */}


                        <div id="guidelinnesInMolecularBiologyLaboratories" style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
                            <Header as='h2' icon textAlign='center'>
                                <Header.Content style={{ marginTop: "60px", marginBottom: "40px" }}><h1 style={{ fontSize: "30px" }}>GUIDELINES IN MOLECULAR BIOLOGY LABORATORIES</h1></Header.Content>
                            </Header>
                            <hr></hr>
                            <div id="bringingStuffInAndOut" style={{ padding: "20px" }}>
                                <h1>Bringing stuff in and out</h1>
                                <Item.Group divided>
                                    <Item>
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>It is not allowed to bring the articles of daily use into the lab unless permitted, and in the same way, experimental tools are not allowed to be brought out of the lab.</Item.Content>
                                    </Item>

                                    <Item>
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>Put your cell phone in a special-made bag if you want to bring your cell phone in the lab for the purposes of recording data.</Item.Content>
                                    </Item>

                                    <Item>
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>Do not touch anything in non-contaminated area with gloves on</Item.Content>
                                    </Item>
                                </Item.Group>
                            </div>

                            <hr></hr>

                            <div id="safetyRulesInThLab" style={{ padding: "20px" }}>
                                <h1>Safety rules in the lab</h1>
                                <Item.Group divided>
                                    <Item id="clothingRequirements">
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>
                                            <List as='ol'>
                                                <List.Item as='li' value='*'>
                                                    Clothing requirements:
                                                    <List.Item as='ol'>
                                                        <List.Item as='li' value='-'>We are going to be at a Safety Level 1 lab, so a white gown is required for every individual, as well as gloves. Wear a goggle if necessary.</List.Item>
                                                        <List.Item as='li' value='-'>Sandals and slippers are not allowed.</List.Item>
                                                        <List.Item as='li' value='-'>If you need to take off the gloves, put the glove in your pocket inside-out.</List.Item>
                                                    </List.Item>
                                                </List.Item>
                                            </List>
                                        </Item.Content>
                                    </Item>
                                    <Item id="experimentalToolsAndInstruments">
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>
                                            <List as='ol'>
                                                <List.Item as='li' value='*'>
                                                    Experimental tools and instruments:
                                                    <List.Item as='ol'>
                                                        <List.Item as='li' value='-'>Do not touch any instruments that are not assigned to you without permission.</List.Item>
                                                        <List.Item as='li' value='-'>Use a standardized method to hold instruments, for many of them are fragile.</List.Item>
                                                    </List.Item>
                                                </List.Item>
                                            </List>
                                        </Item.Content>
                                    </Item>
                                    <Item id="experimentsSafety">
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>
                                            <List as='ol'>
                                                <List.Item as='li' value='*'>
                                                    Experiments Safety:
                                                    <List.Item as='ol'>
                                                        <List.Item as='li' value='-'>Do not attempt to do unauthorized experiments.</List.Item>
                                                        <List.Item as='li' value='-'>Never touch electrical wires or devices with hands wet.</List.Item>
                                                        <List.Item as='li' value='-'>In case of a fire, cut off all power sources and remove flammable substances. Call the police or 119 instantly.</List.Item>
                                                    </List.Item>
                                                </List.Item>
                                            </List>
                                        </Item.Content>
                                    </Item>
                                    <Item id="thingsToPayAttentionTo">
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>
                                            <List as='ol'>
                                                <List.Item as='li' value='*'>
                                                    Things to pay attention to:
                                                    <List.Item as='ol'>
                                                        <List.Item as='li' value='-'>PCR and cells</List.Item>
                                                        <List.Item as='li' value='-'>Electrophoresis</List.Item>
                                                        <List.Item as='li' value='-'>Proteins, enzymes, and DTT</List.Item>
                                                        <List.Item as='li' value='-'>TEMED</List.Item>
                                                        <List.Item as='li' value='-'>Trizol</List.Item>
                                                        <List.Item as='li' value='-'>DEPC</List.Item>
                                                    </List.Item>
                                                </List.Item>
                                            </List>
                                        </Item.Content>
                                    </Item>
                                    <Item id="inTheCaseOfEmergency">
                                        <Item.Image size='small' src={logo} />
                                        <Item.Content verticalAlign='middle'>
                                            <List as='ol'>
                                                <List.Item as='li' value='*'>
                                                    In the case of emergency:
                                                    <List.Item as='ol'>
                                                        <List.Item as='li' value='-'>Report to your teacher immediately.</List.Item>
                                                        <List.Item as='li' value='-'>Don’t attempt to solve the problem by yourself.</List.Item>
                                                    </List.Item>
                                                </List.Item>
                                            </List>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

export default SafetyPage