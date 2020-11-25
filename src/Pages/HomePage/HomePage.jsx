import React from "react";
import {Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

import MainPage from "./MainPage";
import Tips from "./Tips";
import Foot from "../../component/Foot";

const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

/**
 * 主页面，用来展示网站的相关信息
 */
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subpage: 1
        };
        //this.changeSwitch = this.changeSwitch.bind(this);
    }

    /**
    changeSwitch() {
        this.setState({
            subpage: 2
        });
    }
     */

    render() {
        let show;
        if (this.state.subpage === 1) {
            show = <MainPage />;
            // show = <h1>{this.props.location.query.name}</h1>;
        } else if (this.state.subpage === 2) {
            show = <Tips />
        }
        return (
            <Layout style={{height: '100vh'}}>
                {
                    /**
                     * 一个可用的左侧边二级导航栏
                     <Sider>
                     <Menu
                     mode="inline"
                     defaultSelectedKeys={['1']}
                     defaultOpenKeys={['sub1']}
                     style={{ height: '100%', borderRight: 0 }}
                     >
                     <SubMenu key={"1"} title={"网站首页"} />
                     <SubMenu key={"2"} title={"使用须知"} onTitleClick={this.changeSwitch}/>
                     </Menu>
                     </Sider>
                     */
                }

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 300,
                        }}
                    >
                        {show}
                    </Content>
                    <Foot/>
                </Layout>
            </Layout>

        );
    }
}