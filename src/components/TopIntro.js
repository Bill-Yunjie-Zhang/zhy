import React from "react"
import { Header } from "semantic-ui-react"

class TopIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
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
            </div>
        </div>
    }
}

export default TopIntro