import React from "react";
import './Help.css';
import img1 from './images/student.jpg';

export default class StudentHelp extends React.Component {
    render(){
        return(
          <div class="helpTitle">
            <p></p>
            <h2>4.&nbsp;&nbsp;学生功能介绍</h2>
            <p class="pubInfo">发布时间：2020-12-16 06:33:10&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;发布者：李楠</p>
            <p>&nbsp;</p>
            <div class="pubContent">
            <h4>学生的功能总体来说有以下几点：</h4>
            <p>&nbsp;&nbsp;(1)学生查看成绩&nbsp;&nbsp;&nbsp;&nbsp;(2)学生申请复核成绩&nbsp;&nbsp;&nbsp;&nbsp;(3)学生预览或下载课程资料</p>
            <p>&nbsp;&nbsp;(4)学生查看作业&nbsp;&nbsp;&nbsp;&nbsp;(5)学生下载作业附件&nbsp;&nbsp;&nbsp;&nbsp;(6)学生提交个人作业</p>
            <p>&nbsp;&nbsp;(7)学生提交小组作业&nbsp;&nbsp;&nbsp;&nbsp;(8)学生查看作业成绩&nbsp;&nbsp;&nbsp;&nbsp;(9)学生申诉作业成绩</p>
            <p>&nbsp;&nbsp;(10)学生发布讨论&nbsp;&nbsp;&nbsp;&nbsp;(11)学生删除讨论&nbsp;&nbsp;&nbsp;&nbsp;(12)学生发布留言</p>
            <p>&nbsp;&nbsp;(13)学生删除留言&nbsp;&nbsp;&nbsp;&nbsp;(14)学生编辑留言&nbsp;&nbsp;&nbsp;&nbsp;(15)学生查看通知</p>
            <p>&nbsp;&nbsp;(16)学生进入实验平台&nbsp;&nbsp;&nbsp;&nbsp;(17)学生提交在线测试&nbsp;&nbsp;&nbsp;&nbsp;(18)学生查看测试成绩</p>
            <h4>学生功能时序图举例(以学生提交作业为例)：</h4>
            <img src={img1}/>
            </div>
          </div>
        );
    }
}