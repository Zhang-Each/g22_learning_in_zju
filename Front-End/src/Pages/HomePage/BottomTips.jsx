import React from "react";
import './BottomTips.css';
import img1 from './images/aboutUs1.jpg';
import img2 from './images/aboutUs2.jpg';
export default class Tips extends React.Component {
    render(){
        return(
          <div class="myfoot">
            <div class="foot1">
                <div class="fBlock1">
                    <div class="fLogo"></div>
                    <p class="fContent">本教学平台由软件需求工程小组G22推出，为浙江大学学生服务！</p>
                </div>
                <div class="fBlock2">
                    <h4 class="aboutUs">关注我们</h4>
                    <img class="img1" src={img1} alt=""/>
                    <img class="img2" src={img2} alt=""/>
                </div>
                <div class="fBlock3">
                    <h4 class="aboutUs">友情链接</h4>
                    <div class="friendLink">
                        <a href="http://course.zju.edu.cn" target="_blank" rel="noreferrer">学在浙大</a>
                        <a href="http://cc98.org" target="_blank" rel="noreferrer">cc98论坛</a>
                        <a href="http://www.cs.zju.edu.cn" target="_blank" rel="noreferrer">浙江大学计算机学院</a>
                        <a href="http://person.zju.edu.cn" target="_blank" rel="noreferrer">浙江大学教师主页</a>
                        <a href="http://jwbinfosys.zju.edu.cn" target="_blank" rel="noreferrer">浙江大学教务管理系统</a>
                        <a href="http://zdbk.zju.edu.cn" target="_blank" rel="noreferrer">浙江大学教学管理信息服务平台</a>
                    </div>
                </div>
            </div>
            <div class="foot2">
                <div class="foot2Content">
                <p>联系电话:7791237 | email:Hzlou666@zju.edu.cn</p>
                <p>"©2020-2024 sesee163.org"</p>
                </div>
            </div>
          </div>  
        );
    }
}