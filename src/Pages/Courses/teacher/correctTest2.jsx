import React from "react";
import { Link } from 'react-router-dom';
import {Layout, Input, InputNumber, Button, Tag, Divider, Card} from "antd";
import "./correctTest.css";
import scoreInfom from './mockData3'
import Markdown from 'react-remarkable';
const { TextArea } = Input;
/*
const stuInfo = {
    keguan:scoreInfom[0].keguan,
    name:scoreInfom[0].name,
    id:scoreInfom[0].std
}
*/
var local = '';
class ReadPaper extends React.Component{
    scoreChange(i, value){
      local.ans[i].get = value;
    }
    render(){
        var id = this.props.id;
        //local = local===''?scoreInfom[id]:local;
        let questionList = [];
        scoreInfom[id].ans.forEach((item,i)=>{
          questionList.push(
            <div className="question-single" key={i}>
              <Tag>第{i+1}题</Tag>
              <span>本题总分：{item.score}</span>
              <div className="content">
              <div className="bold">题目：</div>
              <div className="detail">{item.content}</div>
              </div>
              <div className="content">
                <div className="bold">学生答案：</div>
                <div className="detail">{item.answer}</div>
              </div>
              <div className="clearfix">
                <span className="f-r">得分：<InputNumber min={0} size="small" style={{width:100}} onChange={this.scoreChange.bind(this,i)} defaultValue={item.get}/></span>
              </div>
              {i == scoreInfom[id].ans.length-1 ? "" : <Divider dashed="true"/>}
            </div>
          )
        })
    
    
        return(
          <Card title={this.props.title} bordered={false} style={{ width: '100%' }} className="card">
            {questionList}
          </Card>
        )
      }
}

class CorrectHomework2 extends React.Component {
    constructor(){
      super();
      this.onClick = this.onClick.bind(this);
    }
    onClick(){
      var id = this.props.location.state.index;
      local.score = local.keguan; 
      for(let i=0; i<local.ans.length; i++){
        local.score += local.ans[i].get;
      }
      scoreInfom[id] = local;
      //console.log(scoreInfom[id] === local)
      alert("批改成功！");
    }
    render() {
        var id = this.props.location.state.index;
        local = scoreInfom[id];
        return (
        <Layout style={{marginTop: '30px'}}>
        <div>
            <Card title="学生信息" className="card">
                <p>{`姓名：${scoreInfom[id].name}`}</p>
                <p>{`学号：${scoreInfom[id].std}`}</p>
            </Card>
            <Card title="客观题得分" className="card">
            <p class="sc">{scoreInfom[id].keguan}</p>
            </Card>
            <ReadPaper title="主观题" id={id}/>
        </div>
        <div style={{ width: '68%', margin:'20px 20px' }} size="large"  className="submit">
                <Button type="primary" onClick={this.onClick}>提交</Button>
                <Link to="/main/courses/teacher/test/correct">
                <Button type="primary" style={{marginLeft: '100px'}}>返回</Button>
                </Link>
        </div>
        </Layout>
        );
    }
}

export default CorrectHomework2;