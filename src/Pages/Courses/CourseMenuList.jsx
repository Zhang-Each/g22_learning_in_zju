import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import axios from "axios";
const { Sider } = Layout;
const { SubMenu } = Menu;

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
            identity: "student",
            course_list: ["程序设计方法学", "计算机系统原理", "操作系统", "汇编语言程序设计基础与计算机处理器历史", "软件保护技术", "数值分析", "数值计算", "科学计算", "数值分析方法深化", "高级数值分析方法"],
            openKeys: []
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
            <Sider>
                <Menu
                    mode="inline"
                    theme="dark"
                    openKeys={this.state.openKeys}
                    onOpenChange={(openKeys) => this.setState({
                        openKeys: openKeys.slice(openKeys.length-1)
                    })}
                >
                {this.state.course_list.map((course_name) => {
                    const identity = this.state.kind ===1? "student":"teacher";
                    return (
                        <SubMenu key={course_name} title={course_name}>
                            <Menu.Item key={`${course_name}-intro`}>
                                <Link to={`/main/courses/${identity}/introduction`}>课程简介</Link>
                            </Menu.Item>
                            <Menu.Item key={`${course_name}-homework_index`}>
                                <Link to={`/main/courses/${identity}/homework`}>作业</Link>
                            </Menu.Item>
                            <Menu.Item key={`${course_name}-test_index`}>
                                <Link to={`/main/courses/${identity}/test`}>测试</Link>
                            </Menu.Item>
                            <Menu.Item key={`${course_name}-material`}>
                                <Link to={`/main/courses/${identity}/material`}>课件</Link>
                            </Menu.Item>
                            <Menu.Item key={`${course_name}-notice`}>
                                <Link to={`/main/courses/${identity}/notice`}>通知</Link>
                            </Menu.Item>
                            <Menu.Item key={`${course_name}-discussion`}>
                                <Link to={`/main/courses/${identity}/discussion`}>讨论区</Link>
                            </Menu.Item>
                        </SubMenu>
                    );
                })}
                </Menu>
            </Sider>
        );
    }
}