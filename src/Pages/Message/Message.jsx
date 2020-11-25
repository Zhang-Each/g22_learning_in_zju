import React from "react";
import {Layout, Menu} from "antd";
// import {Route, Switch} from "react-router";
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const {Content} = Layout;

/**
 * 消息通知页面，预期做出消息的展示、过滤等功能
 * 有条件的情况下可以考虑做分页功能
 */
export default class Message extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '100vh'}}>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <h1>消息通知页面</h1>
                </Content>
            </Layout>
        );
    }

}