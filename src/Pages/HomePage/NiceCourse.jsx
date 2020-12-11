import React from "react";
import './NiceCourse.css';
import img1 from './images/course1.jpg';
import img2 from './images/course2.jpg';
import img3 from './images/course3.jpg';
import img4 from './images/course4.jpg';
import img5 from './images/course5.jpg';
import img6 from './images/course6.jpg';

export default class MainPage extends React.Component {
    render() {
        return (
            <div class="home_course">
            <div class="courseContainer">
                <h3>精品课程 <span>| </span><a href="">更多</a></h3>
                <div class="sectionBlock">
                    <div class="sectionItem1"> 
                        <div class="sectionBox">
                            <img src={img1} />
                            <div class="sectionMsg">
                                <p class="courseTitle">非常天空开发实践</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-09-07</span> </p>
                                <p>
                                    <span class="courseTeacher">楼学庆</span>
                                    <span class="courseType">实训课程</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sectionItem1"> 
                        <div class="sectionBox">
                            <img src={img2} />
                            <div class="sectionMsg">
                                <p class="courseTitle">作业批改技巧导论</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-09-07</span> </p>
                                <p>
                                    <span class="courseTeacher">楼学庆</span>
                                    <span class="courseType">通识课程</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sectionItem1"> 
                        <div class="sectionBox">
                            <img src={img3} />
                            <div class="sectionMsg">
                                <p class="courseTitle">五天五夜写代码实训</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-09-07</span> </p>
                                <p>
                                    <span class="courseTeacher">金波</span>
                                    <span class="courseType">实训课程</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sectionItem2"> 
                        <div class="sectionBox">
                            <img src={img4} />
                            <div class="sectionMsg">
                                <p class="courseTitle">闪电五连鞭</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-09-07</span> </p>
                                <p>
                                    <span class="courseTeacher">马保国、楼学庆</span>
                                    <span class="courseType">体育课程</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sectionItem2"> 
                        <div class="sectionBox">
                            <img src={img5} />
                            <div class="sectionMsg">
                                <p class="courseTitle">演讲与口才</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-09-07</span> </p>
                                <p>
                                    <span class="courseTeacher">邢卫</span>
                                    <span class="courseType">专业课程</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="sectionItem2"> 
                        <div class="sectionBox">
                            <img src={img6} />
                            <div class="sectionMsg">
                                <p class="courseTitle">计算机原理之西湖联欢会</p>
                                <p class="courseTime">开课时间: <span class="startTime">2020-12-14</span> </p>
                                <p>
                                    <span class="courseTeacher">楼学庆</span>
                                    <span class="courseType">实践课程</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}