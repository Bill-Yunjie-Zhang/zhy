import React from "react"
import { Card, Image } from "semantic-ui-react"
import "../css/forSupervisorsSectionCards.css"

class SupervisorsSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Card>
            <Image src={this.props.supervisors.img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{this.props.supervisors.name}</Card.Header>
                <Card.Description>{this.props.supervisors.txt}</Card.Description>
            </Card.Content>
        </Card>
    }
}

export default SupervisorsSection