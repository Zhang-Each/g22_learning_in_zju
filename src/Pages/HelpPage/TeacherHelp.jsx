import React from "react";
import './Help.css';
import img1 from './images/teacher.jpg';
export default class TeacherPage extends React.Component {
    render(){
        return(
            <div class="helpTitle">
                <p></p>
                <h2>2.&nbsp;&nbsp;教师功能介绍</h2>
                <p class="pubInfo">发布时间：2020-12-16 06:33:10&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;发布者：张琦</p>
                <p>&nbsp;</p>
                <div class="pubContent">
                <h4>教师的功能总体来说有以下几点：</h4>
                <p>&nbsp;&nbsp;(1)教师编辑个人主页&nbsp;&nbsp;&nbsp;&nbsp;(2)教师添加助教&nbsp;&nbsp;&nbsp;&nbsp;(3)教师上传课程资料</p>
                <p>&nbsp;&nbsp;(4)教师删除课程资料&nbsp;&nbsp;&nbsp;&nbsp;(5)教师查看班级成绩&nbsp;&nbsp;&nbsp;&nbsp;(6)教师设定算法</p>
                <p>&nbsp;&nbsp;(7)教师提交平时成绩&nbsp;&nbsp;&nbsp;&nbsp;(8)教师修改成绩&nbsp;&nbsp;&nbsp;&nbsp;(9)教师编辑题目</p>
                <p>&nbsp;&nbsp;(10)教师添加测试&nbsp;&nbsp;&nbsp;&nbsp;(11)教师修改测试&nbsp;&nbsp;&nbsp;&nbsp;(12)教师添加作业</p>
                <p>&nbsp;&nbsp;(13)教师修改作业&nbsp;&nbsp;&nbsp;&nbsp;(14)教师查看作业(测试)详情&nbsp;&nbsp;&nbsp;&nbsp;(15)教师删除作业(测试)</p>
                <p>&nbsp;&nbsp;(16)教师查看课程所有作业(测试)提交和批改情况&nbsp;&nbsp;&nbsp;&nbsp;(17)教师在线浏览学生作业(答卷)&nbsp;&nbsp;&nbsp;&nbsp;(18)教师导出学生作业(答卷)附件</p>
                <p>&nbsp;&nbsp;(19)教师批改作业(答卷)&nbsp;&nbsp;&nbsp;&nbsp;(20)教师处理成绩申诉&nbsp;&nbsp;&nbsp;&nbsp;(21)教师发布和查看公告&nbsp;&nbsp;&nbsp;&nbsp;(22)教师查看选课名单</p>
                <h4>教师功能时序图举例(以教师修改成绩为例)：</h4>
                <img src={img1}/>
                </div>
            </div>
        );
    }
}