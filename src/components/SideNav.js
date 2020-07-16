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
        if (item.items) {
            return item.items.map(ii => {
                if (ii.items) {
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
            if (item.items[0].items) {
                return <Menu.Item name={itemName}>
                    {item.text.replace(/:/g, "")}
                    <Menu.Menu>
                        {this.createSecondaryMenu(item)}
                    </Menu.Menu>
                </Menu.Item>
            } else {
                return <Menu.Item name={itemName} onClick={this.handleItemClick}>
                    {item.text.replace(/:/g, "")}
                    <Menu.Menu>
                        {this.createSecondaryMenu(item)}
                    </Menu.Menu>
                </Menu.Item>
            }

        })
    }

    render() {
        const head1 = this.props.sideNavData.text.toUpperCase()
        const items = this.props.sideNavData.items
        return (
            <Menu size='large' vertical style={{ border: "0px", borderRadius: "0", boxShadow: "none", position: "fixed", borderRight: "0.5px solid #2e2e2e" }}>
                <div style={{ paddingTop: "20px" }}>
                    <Menu.Item>
                        <h4>{head1}</h4>
                    </Menu.Item>
                    {this.createMenu(items)}
                </div>
            </Menu>
        )
    }
}

export default SideNav