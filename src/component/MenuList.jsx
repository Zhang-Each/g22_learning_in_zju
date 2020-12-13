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
export default class MenuList extends React.Component {
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
        return (
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
                            <Link to={"/main/courses/student"}>
                                我的课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
        )
        if(this.state.kind === -1){
            return (
                /* 一级导航栏和其对应的路由，从主页面跳转到一级子页面 */
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        <Menu.Item key={'0'}>
                            <Link to={"/main"}>
                                首页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"1"}>
                            <Link to={"/main/openclass"}>
                                公开课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }
        else if(this.state.kind===0){   //管理员
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
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }else if(this.state.kind===2){
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
                            <Link to={"/main/courses/teacher"}>
                                我的课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }else if(this.state.kind===1){
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
                            <Link to={"/main/courses/student"}>
                                我的课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }else if(this.state.kind===3){
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
                            <Link to={"/main/courses/student"}>
                                我的课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"5"}>
                            <Link to={"/main/courses/assistant"}>
                                助教课程
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={"6"}>
                            <Link to={"/main/help"}>
                                帮助
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            );
        }                                    
    }
}