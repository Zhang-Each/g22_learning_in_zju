import React from "react";
import {Form, Input, Button, Checkbox} from "antd";

import 'antd/dist/antd.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 5 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const titleStyle = {
    margin: 10,
    textAlign: 'center'
};

/**
 * 登陆界面的表单，可以输入账号密码登陆，也可以选择游客身份访问
 */
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.touristVisit = this.touristVisit.bind(this);
    }

    handleSubmit(values) {
        this.setState({
            userName: values.username,
            password: values.password
        });
        this.checkLogin();
    }

    checkLogin() {
        let data = {name: this.state.userName, kind: ''};
        let path = {
            pathname: '/main'
        };
        data.kind = checkLoginKind(this.state.userName);
        if(this.state.password === "123") {
            alert("登陆成功!您的身份是" + data.kind);
            this.props.history.push(path);
        }
    }

    touristVisit() {
        const data = {name: '游客', kind: '5'};
        const path = {
            pathname: '/main',
            state: data
        };
        console.log(path)
        alert("以游客身份访问学在浙大！");
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <h1 style={titleStyle}>欢迎来到学在浙带,一个世界一流大学的线上教学平台</h1>
                <Form {...layout} name={"basic"}
                      initialValues={{remember: true}}
                      onFinish={this.handleSubmit}
                      style={{margin: "center"}}>

                    <Form.Item label={"用户名"} name={"username"}
                               rules={[{ required: true, message: 'Please input your username!' }]}
                    style={{alignSelf: "center"}}>
                        <Input value={this.state.username} onChange={this.handleChange}/>
                    </Form.Item>

                    <Form.Item label={"密码"} name={"password"}
                               rules={[{required:true, message:'Please input your password!'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name={"remember"} valuePropName={"checked"}>
                        <Checkbox>记住密码!</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type={"primary"} htmlType={"submit"} style={{margin: '0 16px',}}>
                            提交
                        </Button>
                        <Button htmlType={"button"} onClick={this.touristVisit}>
                            游客访问
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};

function checkLoginKind(name) {
    switch (name) {
        case "admin": return "1";
        case "teacher": return "2";
        case "ta": return "3";
        case "stu": return "4";
        default: return "5";
    }
}