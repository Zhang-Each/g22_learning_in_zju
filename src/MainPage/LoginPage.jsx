import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import axios from "axios";
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
        this.test = "databinding";
        this.state = {
            userName: null,
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.touristVisit = this.touristVisit.bind(this);
    }

    /**
     * 下面这两个函数的代码是我之前写的脑瘫型登陆验证，建议重写，真的垃圾，我吐了
     * @param values
     */
    handleSubmit(values) {
        let loginData = {
            "name": values.username,
            "password": values.password
        };
        axios.post('http://127.0.0.1:8000/login/',loginData).then(res=>{
            //console.log('res=>',res);
            if(res.data.login === true){
                //登录成功后设置cookie，然后跳转，检查登录时要使用cookie中的session_id，到后台进行验证
                document.cookie="session_id="+res.data.session_id;  
                let path = {
                    pathname: '/main'
                };
                this.props.history.push(path);
               
               /*
               var getCookie = function(name) 
                { 
                        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                        if(arr=document.cookie.match(reg)) 
                            return unescape(arr[2]); 
                        else return null; 
                } 
               var url = 'http://127.0.0.1:8000/session/?session_id=' + getCookie('session_id')
               axios.get(url).then(res=>{
                    console.log(res.data);
               })
               */
            }else if(res.data.id_not_exist === true){  //用户名不存在
                alert("您输入的学工号不存在，请检查后重新输入");
            }else if(res.data.wrong_password === true){  //密码错误
                alert("密码错误，请重试");
            }
        })
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
        // 本来我想通过push的方式直接发送信息，不过存在问题
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

                    <Form.Item label={"学工号"} name={"username"}
                               rules={[
                                   { required: true,  message: '学工号不能为空' },
                                   {pattern: /[0-9]{6,}/,   message: '学工号为至少六位的纯数字'}
                                ]
                            }
                    style={{alignSelf: "center"}}>
                        <Input value={this.state.username} placeholder="输入学工号"/>
                    </Form.Item>

                    <Form.Item label={"密码"} name={"password"}
                               rules={[{required:true,  message:'密码不能为空'},
                            {pattern: /^.{1,16}$/,   message: '密码长度为1-16位'}]}>
                        <Input.Password placeholder="输入密码"/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name={"remember"} valuePropName={"checked"}>
                        <Checkbox>记住密码!</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type={"primary"} htmlType={"submit"} style={{margin: '0 16px',}} handleClick={"this.handleSubmit"}>
                            登录
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

/**
 * 这段代码暂时没用了，别看了
 * @param name
 * @returns {string}
 */
function checkLoginKind(name) {
    switch (name) {
        case "admin": return "1";
        case "teacher": return "2";
        case "ta": return "3";
        case "stu": return "4";
        default: return "5";
    }
}

