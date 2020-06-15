import React from "react"
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

class SideNav extends React.Component {
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        document.getElementById(name).scrollIntoView()
    }

    render() {
        return (
            <Menu size='large' vertical style={{ border: "0px", borderRadius: "0", boxShadow: "none", position: "fixed", borderRight: "0.5px solid #2e2e2e" }}>
                <div style={{paddingTop: "20px"}}>
                    <Menu.Item>
                        <h4>GUIDELINES IN MOLECULAR BIOLOGY LABORATORIES</h4>
                    </Menu.Item>
                    <Menu.Item name='bringingStuffInAndOut' onClick={this.handleItemClick}>
                        Bringing stuff in and out
                    </Menu.Item>
                    <Menu.Item>
                        Safety rules in the lab
                        <Menu.Menu>
                            <Menu.Item name='clothingRequirements' onClick={this.handleItemClick}>
                                Clothing requirements
                            </Menu.Item>
                            <Menu.Item name='experimentalToolsAndInstruments' onClick={this.handleItemClick}>
                                Experimental tools and instruments
                            </Menu.Item>
                            <Menu.Item name='experimentsSafety' onClick={this.handleItemClick}>
                                Experiments Safety
                            </Menu.Item>
                            <Menu.Item name='thingsToPayAttentionTo' onClick={this.handleItemClick}>
                                Things to pay attention to
                            </Menu.Item>
                            <Menu.Item name='inTheCaseOfEmergency' onClick={this.handleItemClick}>
                                In the case of emergency
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                </div>
            </Menu>
        )
    }
}

export default SideNav