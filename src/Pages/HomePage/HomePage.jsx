import React from "react";
import {Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

import NiceTeacher from "./NiceTeacher";
import Slider from "./Slider";
import NiceCourse from "./NiceCourse";
import BottomTips from "./BottomTips";


import Img1 from './images/101.jpg';
import Img2 from './images/102.jpg';
import Img3 from './images/103.jpg';
import Img4 from './images/104.jpg';


const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
let  Imgs=[Img1,Img2,Img3,Img4]
/**
 * 主页面，用来展示网站的相关信息
 */
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subpage: 1
        };
        //this.changeSwitch = this.changeSwitch.bind(this);
    }

    /**
    changeSwitch() {
        this.setState({
            subpage: 2
        });
    }
     */

    render() {
        return (
            //<Layout>
                <div>
                 <Slider Imgs={Imgs} />
                 <NiceCourse />
                 <NiceTeacher />
                 <BottomTips />
                </div>
            //</Layout>
       
        );
    }
}