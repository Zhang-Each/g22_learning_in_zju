import React from "react";
import {Layout, Menu} from "antd";
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
// import {Route, Switch} from "react-router";
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import SystemHelp from './SystemHelp';
import TeacherHelp from './TeacherHelp';
import AssistantHelp from './AssistantHelp';
import StudentHelp from './StudentHelp';
import Foot from '../HomePage/BottomTips';

const {Sider, Content} = Layout;
const {SubMenu} = Menu;

/**
 * 帮助页面，显示一些基本的help和网页相关的信息
 */
export default class HelpPage extends React.Component {
    render() {
        
        return (
          <Layout>
          <Layout>
              <Sider>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                  <Menu.Item key={'0'}>
                      <Link to={"/main/help/"}>
                          系统
                      </Link>
                  </Menu.Item>
                  <Menu.Item key={'1'}>
                      <Link to={"/main/help/teacher"}>
                          老师
                      </Link>
                  </Menu.Item>
                  <Menu.Item key={"2"}>
                      <Link to={"/main/help/assistant"}>
                          助教
                      </Link>
                  </Menu.Item>
                  <Menu.Item key={"3"}>
                      <Link to={"/main/help/student"}>
                          学生
                      </Link>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Switch>
              <Route exact path={"/main/help"} component={SystemHelp} />
              <Route path={"/main/help/teacher"} component={TeacherHelp} />
              <Route path={"/main/help/assistant"} component={AssistantHelp} />
              <Route path={"/main/help/student"} component={StudentHelp} />
            </Switch>
          </Layout>
          <Foot />
          </Layout>
        );
        
       
    }

}