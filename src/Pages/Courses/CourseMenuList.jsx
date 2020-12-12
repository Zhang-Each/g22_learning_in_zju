import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
const { Header} = Layout;
var getCookie = function(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) 
        return unescape(arr[2]); 
    else return null; 
} 

export default class CourseMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: -1
        }
    }

    componentDidMount(){
        var that = this
        var url = 'http://127.0.0.1:8000/session/?session_id=' + getCookie('session_id')
        axios.get(url).then(res=>{
                console.log(res.data);
                that.setState({
                    kind: res.data.id===false?-1:res.data.kind,
                })
            })
    }

    render() {
        
        if(this.state.kind === 1){//学生
            return (
                /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
                <Header className="header">
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                        <Menu.Item key={'0'}>
                            <Link to={"/main/courses/student/introduction"}>
                                课程简介
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"1"}>
                            <Link to={"/main/courses/student/homework_index"}>
                                作业
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            <Link to={"/main/courses/student/test_index"}>
                                测试
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"3"}>
                            <Link to={"/main/courses/student/material"}>
                                课件
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"4"}>
                            <Link to={"/main/courses/student/notice"}>
                                通知
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/courses/student/discussion"}>
                                讨论
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }
        else if(this.state.kind===2){   //教师
            return (
                /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
                <Header className="header">
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                    <Menu.Item key={'0'}>
                            <Link to={"/main/courses/teacher/introduction"}>
                                课程简介
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"1"}>
                            <Link to={"/main/courses/teacher/homework"}>
                                作业
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            <Link to={"/main/courses/teacher/test"}>
                                测试
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"3"}>
                            <Link to={"/main/courses/teacher/material"}>
                                课件
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"4"}>
                            <Link to={"/main/courses/teacher/notice"}>
                                通知
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/courses/teacher/discussion"}>
                                讨论
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }else if(this.state.kind===3){//助教
            return (
                /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
                <Header className="header">
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                    <Menu.Item key={'0'}>
                            <Link to={"/main/courses/assistant/introduction"}>
                                课程简介
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"1"}>
                            <Link to={"/main/courses/assistant/homework"}>
                                作业
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            <Link to={"/main/courses/assistant/test"}>
                                测试
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"3"}>
                            <Link to={"/main/courses/assistant/material"}>
                                课件
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"4"}>
                            <Link to={"/main/courses/assistant/notice"}>
                                通知
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/courses/assistant/discussion"}>
                                讨论
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );  
        }    
        return (
            /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
            <Header className="header">
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                    <Menu.Item key={'0'}>
                        <Link to={"/main/courses/introduction"}>
                            课程简介
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"1"}>
                        <Link to={"/main/courses/student/homework_index"}>
                            作业
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"2"}>
                        <Link to={"/main/courses/student/test_index"}>
                            测试
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"3"}>
                        <Link to={"/main/courses/student/material"}>
                            课件
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"4"}>
                        <Link to={"/main/courses/student/notice"}>
                            通知
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"5"}>
                        <Link to={"/main/courses/student/discussion"}>
                            讨论
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        );                                
    }
}