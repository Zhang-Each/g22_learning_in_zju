import React from "react";
import { Layout, Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import HeadTitle from "../component/HeadTitle";
import MenuList from "../component/MenuList";

import {Route, Switch} from "react-router";


import HomePage from "../Pages/HomePage/HomePage";
import PersonInfo from "../Pages/PersonInfo/PersonInfo";
import Course from "../Pages/Courses/Course";
import Message from "../Pages/Message/Message";
import OpenClass from "../Pages/OpenClass/OpenClass";
import HelpPage from "../Pages/HelpPage/HelpPage";

const { SubMenu } = Menu;
const { Content, Sider} = Layout;

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //username: this.props.location.state.name
        };
    }
    render() {
        return (
            <Layout style={{height: "100vh"}}>
                <MenuList/>
                <Content style={{overflow: "auto"}}>
                    <Switch>
                        <Route exact path={"/main"} component={HomePage} />
                        <Route path={"/main/information"} component={PersonInfo} />
                        <Route path={"/main/courses/student"} component={Course} />
                        <Route path={"/main/courses/teacher"} component={Course} />
                        <Route path={"/main/courses/assistant"} component={Course} />
                        <Route path={"/main/message"} component={Message} />
                        <Route path={"/main/openclass"} component={OpenClass} />
                        <Route path={"/main/help"} component={HelpPage} />
                    </Switch>
                </Content>
                {/* <Footer /> */}
            </Layout>
        );
    }
}

export default Navigator;