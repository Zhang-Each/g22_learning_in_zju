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
import HelpPage from "../Pages/HelpPage/Help";


const { SubMenu } = Menu;
const { Content, Sider, Footer} = Layout;

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //username: this.props.location.state.name
        };
    }
    render() {
        return (
            <Layout>
                <Layout>
                    {/*网站的大标题 此处把用户名和类型传递给HeadTitle组件*/}
                    <HeadTitle/>
                </Layout>

                {/*一级导航菜单 */}
                <MenuList />
                {/*子页面的路由*/}
                <Switch>
                    <Route exact path={"/main"} component={HomePage} />
                    <Route exact path={"/main/information"} component={PersonInfo} />
                    <Route exact path={"/main/courses"} component={Course} />
                    <Route exact path={"/main/message"} component={Message} />
                    <Route exact path={"/main/openclass"} component={OpenClass} />
                    <Route exact path={"/main/help"} component={HelpPage} />
                </Switch>
            </Layout>
        );
    }
}

export default Navigator;