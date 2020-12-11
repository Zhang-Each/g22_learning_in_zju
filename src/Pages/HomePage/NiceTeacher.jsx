import React from "react";
import './NiceTeacher.css';
import img1 from './images/tea1.jpg';
import img2 from './images/tea2.jpg';
import img3 from './images/tea3.jpg';
import img4 from './images/tea4.jpg';
import img5 from './images/tea5.jpg';
import img6 from './images/tea6.jpg';
import img7 from './images/tea7.jpg';
import img8 from './images/tea8.jpg';
import img9 from './images/tea9.jpg';
import img10 from './images/tea10.jpg';


export default class Tips extends React.Component {
    render() {
        return (
          <div class="home_teacher">
          <div class="teacherContainer">
            <h3>名师风采 <span>| </span><a href="">更多</a></h3>     
            <ul class="clearfix">
              <li>
                <a href="https://person.zju.edu.cn/0088262" target="_blank">
                <div class="carouselItem" >
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img1} />
                    </div>
                  </div>
                  <h4 class="teaName">何钦铭</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">计算机科学与技术学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/hzlou" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img2} />
                    </div>
                  </div>
                  <h4 class="teaName">楼学庆</h4>
                  <span class="teaInformation">高级工程师</span>
                  <span class="teaInformation">计算机科学与技术学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/0092031" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img3} />
                    </div>
                  </div>
                  <h4 class="teaName">邢卫</h4>
                  <span class="teaInformation">副教授</span>
                  <span class="teaInformation">计算机科学与技术学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/0097412" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img4} />
                    </div>
                  </div>
                  <h4 class="teaName">金波</h4>
                  <span class="teaInformation">高级工程师</span>
                  <span class="teaInformation">计算机科学与技术学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/wengkai" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img5} />
                    </div>
                  </div>
                  <h4 class="teaName">翁恺</h4>
                  <span class="teaInformation">高级讲师</span>
                  <span class="teaInformation">计算机科学与技术学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/0088063" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img6} />
                    </div>
                  </div>
                  <h4 class="teaName">苏德矿</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">数学科学学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/lish" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img7} />
                    </div>
                  </div>
                  <h4 class="teaName">李胜宏</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">数学科学学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/bfshi" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img8} />
                    </div>
                  </div>
                  <h4 class="teaName">史炳锋</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">化学系</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/chhzhao" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img9} />
                    </div>
                  </div>
                  <h4 class="teaName">赵春晖</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">控制科学与工程学院</span>
                </div>
                </a>
              </li>

              <li>
                <a href="https://person.zju.edu.cn/zhaoyangzhang" target="_blank">
                <div class="carouselItem">
                  <div class="img">
                    <div class="img_wrap">
                      <img src={img10} />
                    </div>
                  </div>
                  <h4 class="teaName">张朝阳</h4>
                  <span class="teaInformation">教授</span>
                  <span class="teaInformation">信息与电子工程学院</span>
                </div>
                </a>
              </li>

            </ul>
            
          </div>
          </div>
        );
    }
}