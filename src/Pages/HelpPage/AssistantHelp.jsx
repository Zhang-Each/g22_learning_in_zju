import React from "react";
import './Help.css';
import img1 from './images/assistant.jpg';

export default class AssistantHelp extends React.Component {
    render(){
        return(
            <div class="helpTitle">
            <p></p>
            <h2>3.&nbsp;&nbsp;助教功能介绍</h2>
            <p class="pubInfo">发布时间：2020-12-16 06:33:10&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;发布者：康大凯</p>
            <p>&nbsp;</p>
            <div class="pubContent">
            <h4>助教的功能总体来说有以下几点：</h4>
            <p>&nbsp;&nbsp;(1)助教上传课程资料&nbsp;&nbsp;&nbsp;&nbsp;(2)助教删除课程资料&nbsp;&nbsp;&nbsp;&nbsp;(3)助教发布公告</p>
            <p>&nbsp;&nbsp;(4)助教批改作业打分&nbsp;&nbsp;&nbsp;&nbsp;(5)助教查看班级成绩&nbsp;&nbsp;&nbsp;&nbsp;(6)助教编辑题目</p>
            <p>&nbsp;&nbsp;(7)助教添加测试&nbsp;&nbsp;&nbsp;&nbsp;(8)助教修改测试&nbsp;&nbsp;&nbsp;&nbsp;(9)助教添加作业</p>
            <p>&nbsp;&nbsp;(10)助教修改作业&nbsp;&nbsp;&nbsp;&nbsp;(11)助教查看作业(测试)详情;&nbsp;&nbsp;&nbsp;&nbsp;(12)助教删除作业(测试)</p>
            <p>&nbsp;&nbsp;(13)助教查看课程的所有作业(测试)提交和批改情况&nbsp;&nbsp;&nbsp;&nbsp;(14)助教在线浏览学生作业(答卷)&nbsp;&nbsp;&nbsp;&nbsp;(15)助教导出学生作业(答卷)附件</p>
            <p>&nbsp;&nbsp;(16)助教批改作业(答卷)&nbsp;&nbsp;&nbsp;&nbsp;(17)助教处理成绩申诉&nbsp;&nbsp;&nbsp;&nbsp;(18)助教发布公告&nbsp;&nbsp;&nbsp;&nbsp;(19)助教查看选课名单</p>
            <h4>助教功能时序图举例(以助教批改作业为例)：</h4>
            <img src={img1}/>
            </div>
            </div>
        );
    }
}