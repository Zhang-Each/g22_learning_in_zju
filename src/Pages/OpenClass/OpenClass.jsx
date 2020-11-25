import React from "react";
import {Layout, Menu} from "antd";
// import {Route, Switch} from "react-router";
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const {Content} = Layout;

/**
 * 公开课页面，所有人都能看到的课程信息
 */
export default class OpenClass extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '100vh'}}>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <h1>公开课程页面</h1>
                </Content>
            </Layout>
        );
    }

}