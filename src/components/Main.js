import React from "react"
import { Grid, Header, Item, List } from "semantic-ui-react"
import logo from '../assets/pics/logo.png'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    buildInnerItems = (obj) => {
        console.log(obj.text)
        return <List as='ol'>
            <List.Item as='li' value='*'>
                {obj.text}
                <List.Item as='ol'>
                    {obj.items.map(ele => {
                        return <List.Item as='li' value='-'>{ele.text}</List.Item>
                    })}
                </List.Item>
            </List.Item>
        </List>
    }

    buildItems = (arr) => {
        return arr.map(ele => {
            return <Item id={ele.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")}>
                <Item.Image size='small' src={ele.image} />
                <Item.Content verticalAlign='middle'>
                    {(!ele.items && ele.text.replace(/:/g, "")) || ele.items && this.buildInnerItems(ele)}
                </Item.Content>
            </Item>
        })
    }

    buildSections = (arr) => {
        return arr.map(ele => {
            // console.log(ele)
            return <div>
                <hr></hr>
                <div id={ele.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")} style={{ padding: "20px" }}>
                    <h1>{ele.text.replace(/:/g, "")}</h1>
                    <Item.Group divided>
                        {this.buildItems(ele.items)}
                        {/* <Item>
                            <Item.Image size='small' src={logo} />
                            <Item.Content verticalAlign='mid.dle'>It is not allowed to bring the articles of daily use into the lab unless permitted, and in the same way, experimental tools are not allowed to be brought out of the lab.</Item.Content>
                        </Item>

                        <Item>
                            <Item.Image size='small' src={logo} />
                            <Item.Content verticalAlign='middle'>Put your cell phone in a special-made bag if you want to bring your cell phone in the lab for the purposes of recording data.</Item.Content>
                        </Item>

                        <Item>
                            <Item.Image size='small' src={logo} />
                            <Item.Content verticalAlign='middle'>Do not touch anything in non-contaminated area with gloves on</Item.Content>
                        </Item> */}
                    </Item.Group>
                </div>
            </div>
        })
    }


    render() {
        return <div id={this.props.mainData.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")} style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
            <Header as='h2' icon textAlign='center'>
                <Header.Content style={{ marginTop: "60px", marginBottom: "40px" }}><h1 style={{ fontSize: "30px" }}>{this.props.mainData.text.replace(/:/g, "").toUpperCase()}</h1></Header.Content>
            </Header>

            {this.buildSections(this.props.mainData.items)}
        </div>
    }
}

export default Main