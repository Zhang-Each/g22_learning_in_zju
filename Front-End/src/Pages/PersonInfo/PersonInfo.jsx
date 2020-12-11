import React from "react";
import {Layout, Menu} from "antd";
// import {Route, Switch} from "react-router";

const {Content} = Layout;
const {SubMenu} = Menu;

/**
 * 个人信息页面，需要做修改个人信息修改等功能，如果角色是老师可能还需要开课等功能
 */
export default class PersonInfo extends React.Component {
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                {
                    /** 可能可以用到的二级导航栏
                     <Sider>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        </SubMenu>
                        </Menu>
                     </Sider>
                     */
                }

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                        <h1>个人信息页面</h1>
                    </Content>

                </Layout>


            </Layout>
        );
    }

}