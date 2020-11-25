import React from "react";
import {Layout, Menu} from "antd";
// import {Route, Switch} from "react-router";
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const {Content} = Layout;

/**
 * 帮助页面，显示一些基本的help和网页相关的信息
 */
export default class HelpPage extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '100vh'}}>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <h1>帮助页面</h1>
                </Content>
            </Layout>
        );
    }

}