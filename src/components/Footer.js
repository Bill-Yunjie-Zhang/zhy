import React from "react"
import { Icon, Grid } from 'semantic-ui-react'

class Footer extends React.Component {
    render() {
        return <div style={{ backgroundColor: "#e3e3e3" }}>
            <Grid.Column columns='four'>
                <Grid.Row>
                    <Grid.Column style={{ textAlign: "center" }}>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='facebook f' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='twitter' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='instagram' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='linkedin' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='github' /></a>
                    </Grid.Column>
                    <Grid.Column style={{ textAlign: "center" }}>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='qq' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='wechat' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='weibo' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='wikipedia w' /></a>
                        <a href="https://bill-yunjie-zhang.github.io"><Icon size="big" style={{ margin: "20px" }} name='mail' /></a>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        </div>
    }
}

export default Footer