import React from "react";
import {Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import CourseMenuList from "./CourseMenuList";
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Course extends React.Component {
    render() {
        return (
            /* 我个人认为课程的二级导航栏应该需要先获取当前用户所有的课程信息，然后映射成为二级导航栏，
            *  每个导航栏可以进入一门课程这样子，不知道诸位能不能实现我说的这个功能
            * */
            <h1>热烈祝贺金波老师的第114514匹🐎被本大跌拿下！</h1>
        );
    }

}