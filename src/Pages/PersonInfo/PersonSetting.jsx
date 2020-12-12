import React from "react";
import {Layout, Menu, Divider, Button, Avatar} from "antd";
import { UserOutlined } from '@ant-design/icons';
import AvatarUpload from './AvatarUpload';
import './PersonInfo.css';

const {Content} = Layout;

/**
 * 消息通知页面，预期做出消息的展示、过滤等功能
 * 有条件的情况下可以考虑做分页功能
 */
export default class PersonSetting extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '120vh', background: '#f0f2f5'}}>
                <Divider style={{ background: '#f0f2f5'}} orientation="left" plain>基本信息</Divider>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 420, background: '#fff'}}>
                <div class="personal-information">
                    <div class="name">
                        <span>姓名:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>聂俊哲</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="avatar" >
                        <span>当前头像:&emsp;&emsp;&emsp;</span>
                        <Button type="primary">更改头像</Button>
                    </div>
                    <div>&nbsp;</div>
                    <div class="upload-avatar" >
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <AvatarUpload/>
                    </div>
                    <div>&nbsp;</div>
                    <div class="status">
                        <span>平台角色:&emsp;&emsp;&emsp;</span>
                        <span>学生</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="id">
                        <span>人员编号:&emsp;&emsp;&emsp;</span>
                        <span type="primary">3180103501</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="department">
                        <span>系级:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>计算机科学与技术学院</span>
                    </div>
                </div>
                </Content>
                <Divider style={{ background: '#f0f2f5'}} orientation="left" plain>账号绑定</Divider>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 150, background: '#fff'}}>
                    <div class="email">
                        <span>Email:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>none  &emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <Button>修改Email</Button>
                    </div>
                    <div>&nbsp;</div>
                    <div class="phone-number">
                        <span>手机号:&emsp;&emsp;&emsp;&emsp;&nbsp;</span>
                        <span>none  &emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <Button>修改手机号</Button>
                    </div>
                </Content>
            </Layout>
        );
    }

}