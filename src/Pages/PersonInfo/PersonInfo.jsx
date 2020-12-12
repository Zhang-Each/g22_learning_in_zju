import React from "react";
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import { Layout, Menu, Card, Avatar } from 'antd';
import { UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, NotificationOutlined } from '@ant-design/icons';
import './PersonInfo.css';

import PwdChange from './PwdChange.jsx';
import PersonSetting from './PersonSetting.jsx';

// import {Route, Switch} from "react-router";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

/**
 * 个人信息页面，需要做修改个人信息修改等功能，如果角色是老师可能还需要开课等功能
 */
export default class PersonInfo extends React.Component {

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
                        title="聂俊哲"
                        description="学生"
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