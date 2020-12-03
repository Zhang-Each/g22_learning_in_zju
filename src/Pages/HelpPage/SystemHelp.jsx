import React from "react";
import img1 from './images/dataFlow.jpg';
import './Help.css';

export default class SystemHelp extends React.Component {
    render(){
        return(
            <div class="helpTitle">
                <p></p>
                <h2>1.&nbsp;&nbsp;系统功能介绍</h2>
                <p class="pubInfo">发布时间：2020-12-16 06:33:10&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;发布者：潘凯航</p>
                <p>&nbsp;</p>
                <div class="pubContent">
                <h4>本系统包含以下潜在用户：</h4>
                <p>&nbsp;&nbsp;(1)管理员&nbsp;&nbsp;(2)教师&nbsp;&nbsp;(3)助教&nbsp;&nbsp;(4)学生&nbsp;&nbsp;(5)游客</p>
                <h4>本系统包含以下模块：</h4>
                <p>&nbsp;&nbsp;(1)用户管理模块&nbsp;&nbsp;&nbsp;&nbsp;(2)用户个人信息维护模块&nbsp;&nbsp;&nbsp;&nbsp;(3)开课申请与停开课程</p>
                <p>&nbsp;&nbsp;(4)添加学生进入课程模块&nbsp;&nbsp;&nbsp;&nbsp;(5)课程和教师信息模块&nbsp;&nbsp;&nbsp;&nbsp;(6)课程资料模块</p>
                <p>&nbsp;&nbsp;(7)考试和评分模块&nbsp;&nbsp;&nbsp;&nbsp;(8)作业模块&nbsp;&nbsp;&nbsp;&nbsp;(9)讨论、答疑、留言模块&nbsp;&nbsp;&nbsp;&nbsp;(10)教师发布课程通知模块</p>
                <h4>以下是本系统的顶层数据流图：</h4>
                <img src={img1}/>
                </div>
            </div>
        );
    }
}