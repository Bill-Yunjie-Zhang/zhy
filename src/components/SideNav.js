import React from "react"
import { Menu } from 'semantic-ui-react'

class SideNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        document.getElementById(name).scrollIntoView()
    }

    createSecondaryMenu = (item) => {
        // console.log(item.items)
        if (item.items) {
            // console.log(item.items)
            // console.log(11111, item.items.items)
            return item.items.map(ii => {
                // console.log("ii", ii)
                if (ii.items) {
                    // console.log(ii.items)
                    // console.log("ii.text", ii.text)
                    let itemName = ii.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")
                    return <Menu.Item name={itemName} onClick={this.handleItemClick}>
                        {ii.text.replace(/:/g, "")}
                    </Menu.Item>
                }
            })
        }
    }

    createMenu = (items) => {
        return items.map(item => {
            let itemName = item.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")
            return <Menu.Item name={itemName} onClick={this.handleItemClick}>
                {item.text.replace(/:/g, "")}
                <Menu.Menu>
                    {this.createSecondaryMenu(item)}
                </Menu.Menu>
            </Menu.Item>
        })
    }

    render() {
        const head1 = this.props.sideNavData.text.toUpperCase()
        // console.log(head1)
        const items = this.props.sideNavData.items
        return (
            <Menu size='large' vertical style={{ border: "0px", borderRadius: "0", boxShadow: "none", position: "fixed", borderRight: "0.5px solid #2e2e2e" }}>
                <div style={{ paddingTop: "20px" }}>
                    <Menu.Item>
                        <h4>{head1}</h4>
                    </Menu.Item>

                    {this.createMenu(items)}

                    {/* {items.map(item => {
                        let itemName = item.text.replace(/:/g, "").toLowerCase().replace(/ /g, "")
                        return <Menu.Item name={itemName} onClick={this.handleItemClick}>
                            {item.text.replace(/:/g, "")}
                            <Menu.Menu>
                                {this.createSecondaryMenu(item)}
                            </Menu.Menu>
                        </Menu.Item>
                    })} */}

                    {/* <Menu.Item name='bringingStuffInAndOut' onClick={this.handleItemClick}>
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
                    </Menu.Item> */}
                    
                </div>
            </Menu>
        )
    }
}

export default SideNav