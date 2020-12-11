import React from "react";
import Learn_in_ZJU from "../static/learn_in_zju_logo.png"
import {Button} from "antd";


/**
 * 网页的头部，展示网页的logo和用户的简单名片
 */
export default class HeadTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            kind: getUserKind(this.props.kind)
        }
    }

    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <div>
                    <img style={{height: '50px'}} src={Learn_in_ZJU} alt={"logo"} />
                    {
                        /** 有点问题，在刷新的时候会丢失，这里需要想办法改进
                         <Button style={{float: "right", height: '50px'}} type="primary" size="large">
                         用户名：{this.state.name}  类型：{this.state.kind}
                         </Button>
                         */
                    }
                </div>
            </div>
        );
    }
};

/**
 * 返回用户的类型
 * @param kind 用户的类型，看起来是数字其实是个字符串
 * @returns {string} 用户类型的中文
 */
function getUserKind(kind) {
    console.log(kind);
    let user_kind;
    switch (kind) {
        case "1": user_kind = "管理员"; break;
        case "2": user_kind = "教师"; break;
        case "3": user_kind = "助教"; break;
        case "4": user_kind = "学生"; break;
        default: user_kind = "游客"; break;
    }
    console.log(user_kind);
    return user_kind;
}