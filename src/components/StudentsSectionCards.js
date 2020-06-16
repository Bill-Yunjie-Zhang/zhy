import React from "react"
import ReactCardFlip from 'react-card-flip'
import { Card, Image } from "semantic-ui-react"
import "../css/forStudentsSectionCards.css"

class StudentsSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFlipped: false
        }
    }

    handleHover = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        let individual = this.props.students
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" style={{margin: "10px"}}>
                <div onMouseEnter={this.handleHover}>
                    <Card>
                        <Image src={individual.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header style={{textAlign: "center"}}>{individual.name}</Card.Header>
                        </Card.Content>
                    </Card>
                </div>

                <div onMouseLeave={this.handleHover}>
                    <Card>
                        <p style={{padding: "20px"}}>{individual.txt}</p>
                        <Card.Content>
                            <Card.Header style={{textAlign: "center"}}>{individual.name}</Card.Header>
                        </Card.Content>
                    </Card>                
                </div>
            </ReactCardFlip>
        )
    }
}

export default StudentsSection