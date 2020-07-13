import React from 'react'
import { Header, Icon, Card } from "semantic-ui-react"
import team from "../../assets/data/teamPageData"
import StudentsSectionCards from "../../components/StudentsSectionCards"
import SupervisorsSectionCards from "../../components/SupervisorsSectionCards"
import "../../css/forTeamPage.css"

class TeamPage extends React.Component {
    loopStudentsCards = () => {
        let student = team.students
        return student.map(ele => {
            return <StudentsSectionCards students={ele}></StudentsSectionCards>
        })
    }

    loopSupervisorsCards = () => {
        let supervisors = team.supervisors
        return supervisors.map(ele => {
            return <SupervisorsSectionCards supervisors={ele}></SupervisorsSectionCards>
        })
    }

    render() {
        return <div id="teamPageWrapper">
            <div style={{ backgroundColor: "#e3e3e3", padding: "50px" }}>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' size='massive' />
                    <Header.Content style={{ marginTop: "30px" }}><h1 style={{ fontSize: "30px" }}>Our Team</h1></Header.Content>
                </Header>
            </div>
            <div id="studentsSection" style={{ padding: "50px" }}>
                <h1 style={{ color: "#616161" }}>Meet the Team</h1>
                <Card.Group itemsPerRow={3}>
                    {this.loopStudentsCards()}
                </Card.Group>
            </div>
            <div id="supervisorsSection" style={{ padding: "50px" }}>
                <h1 style={{ color: "#616161" }}>Meet Our Instructors</h1>
                <Card.Group itemsPerRow={4}>
                    {this.loopSupervisorsCards()}
                </Card.Group>
            </div>
        </div>
    }
}

export default TeamPage