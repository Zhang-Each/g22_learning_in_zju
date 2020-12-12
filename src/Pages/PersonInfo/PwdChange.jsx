import React from "react";
import {Layout, Menu,Form, Input, Button, Divider } from 'antd'


const {Content} = Layout;

/**
 * 消息通知页面，预期做出消息的展示、过滤等功能
 * 有条件的情况下可以考虑做分页功能
 */
export default class PwdChange extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '100vh',background:'#f0f2f5' }}>
                <div className="account-setting" >
                <Divider orientation="left" plain>修改密码</Divider>
                <Form layout="vertical"  style={{ width: '300px' }}>
                    <Form.Item
                        label="登录名"
                        name="name"
                        initialValue = "admin"
                        rules={[
                        {
                          required: true
                        }
                        ]}
                    >
                    <Input readOnly disabled />
                    </Form.Item>
                <Form.Item
                    label="新密码"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: "请输入新密码"
                    },
                    {
                        pattern: /.{6,}/,
                        message: "新密码至少6位"
                    }
                    ]}
                >
                <Input type="password" maxLength={32} />
                </Form.Item>
                    <br />
            <Form.Item>
                <Button type="primary" >提交</Button>
             </Form.Item>
        </Form>
        </div>
        </Layout>
        );
    }

}