import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
import getCookie from "../util";
const { Header} = Layout;

export default class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: -1
        }
    }

    componentDidMount(){
        var that = this
        var url = 'http://127.0.0.1:8000/session/?session_id=' + getCookie('session_id')
        axios.get(url).then(res=>{
                console.log(res.data);
                that.setState({
                    kind: res.data.id===false?-1:res.data.kind,
                })
            })
    }

    render() {
        return (
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['main']}
                >
                    <Menu.Item key="main">
                        <Link to={"/main"}>首页</Link>
                    </Menu.Item>
                    {this.state.kind !== -1 &&
                    <Menu.Item key="info">
                        <Link to={"/main/information"}>个人信息</Link>
                    </Menu.Item>}
                    {this.state.kind !== -1 &&
                    <Menu.Item key="message">
                        <Link to={"/main/message"}>消息通知</Link>
                    </Menu.Item>}
                    {this.state.kind !== 1 &&
                    (this.state.kind === 2 ?
                    <Menu.Item key="teacher">
                        <Link to={"/main/courses/teacher"}>我的课程</Link>
                    </Menu.Item> : 
                    <Menu.Item key="student">
                        <Link to={"/main/courses/student"}>我的课程</Link>
                    </Menu.Item>)}
                    {this.state.kind === 3 &&
                    <Menu.Item key="assistant">
                        <Link to={"/main/courses/assitant"}>助教课程</Link>
                    </Menu.Item>}
                    <Menu.Item key="openclass">
                        <Link to={"/main/openclass"}>公开课程</Link>
                    </Menu.Item>
                    <Menu.Item key="help">
                        <Link to={"/main/help"}>帮助</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}