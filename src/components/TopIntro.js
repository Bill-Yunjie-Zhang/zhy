import React from "react"
import { Header } from "semantic-ui-react"

class TopIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props)
        return <div id={this.props.introData.title.toLowerCase().replace(/ /g, "")} style={{ backgroundColor: "#e3e3e3", padding: "50px", paddingBottom: "80px" }}>
            <Header as='h2' icon textAlign='center'>
                <img src={this.props.introData.image} style={{ height: "100px", width: "110px" }}></img>
                <Header.Content style={{ marginTop: "30px" }}><h1 style={{ fontSize: "30px" }}>{this.props.introData.title.toUpperCase()}</h1></Header.Content>
            </Header>
            <hr></hr>
            <div style={{ fontSize: "20px" }}>
                {typeof(this.props.introData.texts) === "object" && this.props.introData.texts.map(ele => {
                    return <p>{ele}</p>
                })}
                {/* <p>When we are doing the project, biosafety always comes first. We believe that It is always harder to keep the safety of the lab than promise, which is why it is necessary to reinforce and familiarize with the safety rules. </p>
                <p>We strictly follow the requirements and guidelines provided by iGEM headquarters. Since we are only in a BSL 1 lab, we will not use pathogenesis, and any microorganisms that belongs to high risk levels. We would also never use parts that are harmful to any animals or our surroundings. </p>
                <p>With procedures regarding sanitization and lab waste processing</p> */}
            </div>
        </div>
    }
}

export default TopIntro