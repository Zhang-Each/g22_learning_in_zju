import React from "react";
import {Layout, Menu, Divider, Button, Avatar} from "antd";
import AvatarUpload from './AvatarUpload';
import './PersonInfo.css';
import axios from "axios";

const {Content} = Layout;
var getCookie = function(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) 
        return unescape(arr[2]); 
    else return null; 
} 

/**
 * 消息通知页面，预期做出消息的展示、过滤等功能
 * 有条件的情况下可以考虑做分页功能
 */
export default class PersonSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            kind: -1,
            department: null,
            email:null,
            introduce:null,
            major: null,
            name: null,
        }

        var info = {'id':'31801000'};
        var url = 'http://127.0.0.1:8000/session/?session_id=' + getCookie('session_id')
        axios.get(url).then(res=>{
            this.setState({
                    kind: res.data.id===false?-1:res.data.kind,
                    id: res.data.id===false?-1:res.data.id
            })
            info.id = res.data.id
            axios.post('http://127.0.0.1:8000/info/', info).then(res=>{
                console.log(res.data.info)
                this.setState({
                    department : res.data.info.department,
                    email : res.data.info.email,
                    major : res.data.info.major,
                    introduce : res.data.info.introduce,
                    name : res.data.info.name
                })
            })
        })
    }

    render() {
        return (
            <Layout style={{ padding: '0 24px 24px', height: '124vh', background: '#f0f2f5'}}>
                <Divider style={{ background: '#f0f2f5'}} orientation="left" plain>基本信息</Divider>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 460, background: '#fff'}}>
                <div class="personal-information">
                    <div class="name">
                        <span>姓名:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>{this.state.name}</span>
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
                        <span>{this.state.kind===1?"学生":this.state.kind===2?"教师":this.state.kind===3?"助教":"管理员"}</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="id">
                        <span>人员编号:&emsp;&emsp;&emsp;</span>
                        <span type="primary">{this.state.id}</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="department">
                        <span>系级:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>{this.state.department}</span>
                    </div>
                    <div>&nbsp;</div>
                    <div class="description">
                        <span>个人简介:&emsp;&emsp;&emsp;</span>
                        <span>{this.state.introduce}</span>
                    </div>
                </div>
                </Content>
                <Divider style={{ background: '#f0f2f5'}} orientation="left" plain>账号绑定</Divider>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 150, background: '#fff'}}>
                    <div class="email">
                        <span>Email:&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                        <span>{this.state.email}  &emsp;&emsp;&emsp;&emsp;&emsp;</span>
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