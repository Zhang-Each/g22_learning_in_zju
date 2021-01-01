import React from "react";
import { Link } from 'react-router-dom';
import {Layout, Input, InputNumber, Select, DatePicker, Upload, message, Button, Form, Card} from "antd";
import { UploadOutlined, CheckCircleOutlined, CheckSquareOutlined,FileTextOutlined,CloseCircleOutlined,EditOutlined,FormOutlined } from '@ant-design/icons';
import QSingle from './qsingle';
import QMultiple from './qmultiple';
import QTrueOrFalse from './qTrueOrFalse.jsx'
import QShortAnswer from './qShortAnswer'
import QLongAnswer from './qLongAnswer'
import localStorage from './mockData';
const { TextArea } = Input;
const { Option } = Select;
const newQ1 = [{
  type: 1},{type: 2}]
const props1 = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};


class EditTest extends React.Component {
  constructor(){
    super();
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleAddSingle = this.handleAddSingle.bind(this);
    this.handleAddMultiple = this.handleAddMultiple.bind(this);
    this.handleAddTrue = this.handleAddTrue.bind(this);
    this.handleAddShort = this.handleAddShort.bind(this);
    this.handleAddLong = this.handleAddLong.bind(this);
    this.getAddArea = this.getAddArea.bind(this);
    //this.handleMoveQue = this.handleMoveQue.bind(this);
    this.state = {
      addAreaVisible: 0,
      test: '',
    }
  }

  handleAddQuestion() {
    this.setState({
        addAreaVisible: !this.state.addAreaVisible
    })
  }

  handleAddSingle() {
    const newQ = {
      type: 0,
      tigan: '',
      fenzhi: '',
      answer: '',
      options:[{
      content: '',
      option: 'A',
      key: 0
    },{
      content: '',
      option: 'B',
      key: 1
    },{
      content: '',
      option : 'C',
      key : 2
    },{
      content: '',
      option : 'D',
      key : 3
    }]}
    var queList = this.state.test;
    queList.questions.push(newQ);
    this.setState({test:queList,addAreaVisible: 0});
  }

  handleAddMultiple() {
    const newQ = {
      type: 1,
      tigan: '',
      fenzhi: '',
      answer: [],
      options:[{
      content: '',
      option: 'A',
      key: 0
    },{
      content: '',
      option: 'B',
      key: 1
    },{
      content: '',
      option : 'C',
      key : 2
    },{
      content: '',
      option : 'D',
      key : 3
    }]}
    var queList = this.state.test;
    queList.questions.push(newQ);
    this.setState({test:queList,addAreaVisible: 0});
  }

  handleAddTrue() {
    const newQ = {
      type: 2,
      tigan: '',
      fenzhi: '',
      answer: ''
    }
    var queList = this.state.test;
    queList.questions.push(newQ);
    this.setState({test:queList,addAreaVisible: 0});
  }

  handleAddShort() {
    const newQ = {
      type: 3,
      tigan: '',
      fenzhi: '',
      answer: ''
    }
    var queList = this.state.test;
    queList.questions.push(newQ);
    this.setState({test:queList,addAreaVisible: 0});
  }

  handleAddLong() {
    const newQ = {
      type: 4,
      tigan: '',
      fenzhi: '',
    }
    var queList = this.state.test;
    queList.questions.push(newQ);
    this.setState({test:queList,addAreaVisible: 0});
  }

  getAddArea() {
    return (
      this.state.addAreaVisible ? (
        <div style={{ padding: 30, textAlign: 'center', border: '1px solid #eee' }}>
            <Button icon={<CheckCircleOutlined/>} size="large" onClick={this.handleAddSingle}>单选</Button>
            <Button icon={<CheckSquareOutlined />} size="large" style={{ marginLeft: 16 }} onClick={this.handleAddMultiple}>多选</Button>
            <Button icon={<CloseCircleOutlined />} size="large" style={{ marginLeft: 16 }} onClick={this.handleAddTrue}>判断</Button>
            <Button icon={<EditOutlined />} size="large" style={{ marginLeft: 16 }} onClick={this.handleAddShort}>填空</Button>
            <Button icon={<FormOutlined />} size="large" style={{ marginLeft: 16 }} onClick={this.handleAddLong}>简答</Button>
        </div>
      ):''
    );
  }

  handleMoveQue(i) {
    /*
    var queList = this.state.queList;
    queList.splice(i, 1)
    this.setState({queList:queList})*/
    var queList = this.state.test;
    queList.questions.splice(i, 1)
    this.setState({test:queList})
  }

  onChangee0 = (e)=>{
    this.state.test.title = e.target.value;
  }

  onChangee1 = (value)=>{
    this.state.test.time = value;
  }

  onOk1 = (value)=>{
    this.state.test.date1 = value;
    this.state.test.sdate1 = value.toLocaleString();
  }

  onOk2 = (value)=>{
    this.state.test.date2 = value;
    this.state.test.sdate2 = value.toLocaleString();
  }

  onClick = ()=>{
    var id = this.props.location.state.index;
    if(this.state.title==='')
    alert("测试名称不能为空！");
    else{
    localStorage[id] = this.state.test;
    alert("测试编辑成功");}
  }

  onChange0 = (que, i)=>{
    var test = this.state.test;
    test.questions[i] = que;
    this.setState({test:test}) 
  }

  render(){
    var id = this.props.location.state.index;
    this.state.test = this.state.test===''?localStorage[id]:this.state.test;
    var queList = this.state.test.questions;
    var questionList = queList.map((item, i) => {
      var q;
      if(item.type === 0) q = <QSingle index={i} question={this.state.test.questions[i]} onChange0={this.onChange0}/>
      else if(item.type === 1) q = <QMultiple index={i} question={this.state.test.questions[i]} onChange0={this.onChange0}/>
      else if(item.type === 2) q = <QTrueOrFalse index={i} question={this.state.test.questions[i]} onChange0={this.onChange0}/>
      else if(item.type === 3) q = <QShortAnswer index={i} question={this.state.test.questions[i]} onChange0={this.onChange0}/>
      else q = <QLongAnswer index={i} question={this.state.test.questions[i]} onChange0={this.onChange0}/>  
      return(
        <div style={{ padding: 30, border: '1px solid #eee' }}>
        {q}
        <Button type="primary" onClick={this.handleMoveQue.bind(this,i)}>删除题目</Button>
        </div>
      )
    })
    return(
        <Layout style={{marginTop:'30px'}}>
          <Card title="基本测试信息">
            <Form style={{ width: '68%' }} size="large">
            <Form.Item label="测试名称" name="测试名称" 
            rules={[{ required: true, message: '请输入测试名称!' }]}>
              <Input onChange={this.onChangee0} defaultValue={localStorage[id].title}/>
            </Form.Item>
            <Form.Item label="测试时长">
                <InputNumber defaultValue={120} formatter={value => `${value}min`} 
                parser={value => value.replace('min', '')} onChange={this.onChangee1}
                defaultValue={localStorage[id].time}/>
            </Form.Item>
            <Form.Item label="测试起始时间">
                <DatePicker showTime onOk={this.onOk1} defaultValue={localStorage[id].date1}/>
            </Form.Item>
            <Form.Item label="测试结束时间">
                <DatePicker showTime onOk={this.onOk2} defaultValue={localStorage[id].date2}/>
            </Form.Item>
            <Form.Item label="题目导入">
              <Upload {...props1}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            </Form>
          </Card>
          <Card title="添加试题">
          {questionList}
            {this.getAddArea()}
            <div className="addQuestion" style={{ wdith: '100%', height: '100%', padding: 30, background: '#eee', textAlign: 'center'}} onClick={this.handleAddQuestion}>
                    添加问题
                </div>
          </Card>
          <Form style={{marginTop:'20px'}}>
          <Form.Item>
          <Button type="primary" onClick={this.onClick}>
              保存
            </Button>
            <Link to="/main/courses/teacher/test">
            <Button type="primary" style={{marginLeft: '100px'}}>
                返回
            </Button>
            </Link>
            </Form.Item></Form>
        </Layout>
    );
  }
}

export default EditTest;