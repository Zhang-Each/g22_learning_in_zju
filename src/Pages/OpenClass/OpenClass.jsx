import React, {Component} from "react";
import PropTypes from "prop-types";
import {Layout, Menu, message, Upload, Modal, Button, Input, notification, Table, Form} from "antd";
import { InboxOutlined } from '@ant-design/icons';

const {Content} = Layout;
/**
 * 公开课页面，所有人都能看到的课程信息
 */
class OpenClass extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '100vh'}}>
                <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <p>公开课程</p>
                </Content>
            </Layout>
        );
    }
}

export default OpenClass