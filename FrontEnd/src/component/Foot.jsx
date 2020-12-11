import React from "react";
import {Layout} from "antd";

const {Footer} = Layout;

export default class Foot extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                浙江大学软工三连G22团队开发©2020<br/>
                项目组成员：张溢弛，张琦，聂俊哲，潘凯航，康大凯，李楠
            </Footer>
        );
    }
}