import React from "react";
import { Link } from 'react-router-dom';
import {Layout, Input, InputNumber, Button, Form, Card} from "antd";
import Markdown from 'react-remarkable';
import scoreData2 from './mockData4';
const { TextArea } = Input;
/*
const homeworkCorrect = {
    name: "张三",
    id: "3180100000",
    content: `
\`\`\`
<assign>
=><id>=<expr>
=>A=<expr>
=>A=<expr>+<term>
=>A=<term>+<term>
=>A=<term>*<factor>+<term>
=>A=<factor>*<factor>+<term>
=>A=<id>*<factor>+<term>
=>A=A*<factor>+<term>
=>A=A*<id>+<term>
=>A=A*B+<term>
=>A=A*B+<term>*<factor>
=>A=A*B+<factor>*<factor>
=>A=A*B+<id>*<factor>
=>A=A*B+C*<factor>
=>A=A*B+C*<id>
=>A=A*B+C*A
\`\`\`
    `,
    complain: "我认为不正确"
} */
var local = '';
class CorrectHomework2 extends React.Component {
    onChange1 = (value)=>{
        local.score = value;
        local.get = value;
    }
    onChange2 = (e)=>{
        local.comment = e.target.value;
    }
    onClick = ()=>{
        var id = this.props.location.state.index;
        scoreData2[id] = local;
        alert("批改成功");
    }
    render() {
        var id = this.props.location.state.index;
        local = scoreData2[id];
        return (
        <Layout style={{marginTop: '30px'}}>
        <div>
            <Card title="学生信息">
                <p>{`姓名：${scoreData2[id].name}`}</p>
                <p>{`学号：${scoreData2[id].std}`}</p>
            </Card>
            <Card title="作业内容">
                <p>{`作业名称：${scoreData2[id].title}`}</p>
                <p>{`作业要求：${scoreData2[id].content}`}</p>
            </Card>
            <Card title="提交内容">
             <Markdown source={scoreData2[id].answer} />
            </Card>
            <Card title="附件">
              <p>无</p>
            </Card>
            <Card title="申诉">
            <p>{`${scoreData2[id].complain}`}</p>
            </Card>
        </div>
        <Form style={{ width: '68%', margin:'20px 20px' }} size="large">
            <Form.Item label="评分：">
            <InputNumber min={0} max={100} defaultValue={scoreData2[id].get} onChange={this.onChange1}></InputNumber>
            </Form.Item>
            <Form.Item label="评语：">
            <TextArea rows={8} defaultValue={scoreData2[id].comment} onChange={this.onChange2}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={this.onClick}>提交</Button>
                <Link to="/main/courses/teacher/homework/correct">
                <Button type="primary" style={{marginLeft: '100px'}}>返回</Button>
                </Link>
            </Form.Item>
        </Form>
        </Layout>
        );
    }
}

export default CorrectHomework2;

