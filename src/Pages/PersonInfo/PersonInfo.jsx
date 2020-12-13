import React from "react";
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import { Layout, Menu, Card, Avatar } from 'antd';
import { UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, NotificationOutlined } from '@ant-design/icons';
import './PersonInfo.css';

import PwdChange from './PwdChange.jsx';
import PersonSetting from './PersonSetting.jsx';
import axios from "axios";
// import {Route, Switch} from "react-router";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

var getCookie = function(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) 
        return unescape(arr[2]); 
    else return null; 
} 
/**
 * 个人信息页面，需要做修改个人信息修改等功能，如果角色是老师可能还需要开课等功能
 */
export default class PersonInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: null,
        kind: -1,
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
                name : res.data.info.name
            })
        })
    })
}
    render() {
        return (
            <Layout>
              <Layout className="site-layout-background" >
                  <Sider className="site-layout-background" width={200}>
                    <div>&nbsp;</div>
                    <Card
                      style={{ width: 200 , textAlign: 'center', image: 'center'}}
                      cover={ 
                        <p style={{ textAlign: 'center'}}><Avatar size={72} icon={<UserOutlined />} /></p>
                      }
                      >
                      <Meta
                        title={this.state.name}
                        description={this.state.kind===1?"学生":this.state.kind===2?"教师":this.state.kind===3?"助教":"管理员"}
                        />
                    </Card>,
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0  }}
                    >
                      <SubMenu key="sub1" icon={<NotificationOutlined />} title="账户管理">
                          <Menu.Item key="1">
                            <Link to={"/main/information"}>
                              个人设置
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <Link to={"/main/information/pwd"}>
                              密码修改
                            </Link>
                          </Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" icon={<UserOutlined />} title="我的学习">
                          <Menu.Item key="3">我的课程</Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Sider>
                  <Switch>
                    <Route exact path={"/main/information"} component={PersonSetting} />
                    <Route path={"/main/information/pwd"} component={PwdChange} />
                  </Switch>
              </Layout>
              <Footer style={{ textAlign: 'center' }}>
                浙江大学软工三连G22团队开发©2020<br/>
                项目组成员：张溢弛，张琦，聂俊哲，潘凯航，康大凯，李楠
              </Footer>
          </Layout>
        );
    }

}