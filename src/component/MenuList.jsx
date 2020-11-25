import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
const { Header} = Layout;

export default class MenuList extends React.Component {
    render() {
        return (
            /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                    <Menu.Item key={'0'}>
                        <Link to={"/main"}>
                            首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={'1'}>
                        <Link to={"/main/information"}>
                            个人信息
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"2"}>
                        <Link to={"/main/message"}>
                            消息通知
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"3"}>
                        <Link to={"/main/openclass"}>
                            公开课程
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"4"}>
                        <Link to={"/main/courses"}>
                            我的课程
                        </Link>
                    </Menu.Item>
                    {
                        /** 合并到我的课程中，暂时弃用
                         * <Menu.Item key={"4"}>
                            <Link to={"/main/homework"}>
                            作业考试
                            </Link>
                            </Menu.Item>
                            <Menu.Item key={"5"}>
                            <Link to={"/main/discussion"}>
                            讨论交流
                            </Link>
                            </Menu.Item>
                         */
                    }
                    <Menu.Item key={"5"}>
                        <Link to={"/main/help"}>
                            帮助
                        </Link>
                    </Menu.Item>

                </Menu>
            </Header>
        );
    }
}