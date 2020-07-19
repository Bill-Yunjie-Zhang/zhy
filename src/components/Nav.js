import React from 'react'
import routes from "../assets/data/routes"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import logo from '../assets/pics/logo.png'
import "../css/forNav.css"
import { Icon } from 'semantic-ui-react'
import { config } from '../constants'

class Nav extends React.Component {

    buildRoute = () => {
        const keys = Object.keys(routes)
        return keys.map(ele => {
            return routes[ele].map(e => {
                return <Route path={e.route} exact={true} component={e.component} />
            })
        })
    }

    buildNav = () => {
        const keys = Object.keys(routes)
        return keys.map(ele => {
            const individual = routes[ele]
            if(ele !== "home" && ele !== "collaborations"){
                if (individual.length > 1) {
                    return <Dropdown item text={individual[0].title}>
                        <Dropdown.Menu>
                            {individual.map(e => {
                                return <Dropdown.Item name={ele} to={e.route} as={Link}>{e.title}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                } else {
                    return <Menu.Item name={individual[0].title.toLowerCase()} to={individual[0].route} as={Link}>
                        {individual[0].title}
                    </Menu.Item>
                }
            }
        })
    }

    render() {
        return (
            <BrowserRouter basename={config === "development" ? "" : "zhy"}>
                <Menu stackable borderless id="topNav">
                    <Menu.Item to={routes.home[0].route} as={Link}>
                        <img src={logo} />
                    </Menu.Item>

                    <Menu.Item name="home" to={routes.home[0].route} as={Link}>
                        {routes.home[0].title}
                    </Menu.Item>

                    {this.buildNav()}

                    <Menu.Item name='collaborations' position='right' to={routes.collaborations[0].route} as={Link}>
                        <Icon name="handshake" size="large" />
                        {routes.collaborations[0].title}
                    </Menu.Item>
                </Menu>

                {this.buildRoute()}
            </BrowserRouter>
        )
    }
}

export default Nav