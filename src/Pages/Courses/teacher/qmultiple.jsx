//单选题
import React from 'react';
import ReactDOM from 'react-dom'

import { Form,Input,Select,Radio,Row,Col,Button,Checkbox,message,Modal, InputNumber } from 'antd';
import { CheckCircleOutlined, PlusSquareOutlined ,FileTextOutlined, DeleteOutlined  } from '@ant-design/icons';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
/*
let localCounter = 4;
let keys = [{
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
}]*/

class QMultiple extends React.Component {
  constructor(){
    super();
    this.state = {
      que: ''
    }
    this.localCounter = 0;
  }

  //点击答案
  clickWhichAnswer(option){
    let que = this.state.que;
    if(que.answer.indexOf(option) === -1) {
        que.answer.push(option);
    }
    else {
      que.answer = que.answer.filter(item=>item !== option);
    }
    que.answer = que.answer.sort();
    this.setState({que : que})
    this.props.onChange0(this.state.que, this.props.index);
  }

  //增加选项
  addOption(){
    let nextOptionCode = 'A'.charCodeAt(0);
    let que = this.state.que;
    if(que.options.length > 0) {
      let lastOptionCode = que.options[que.options.length - 1].option.charCodeAt(0);
      nextOptionCode = lastOptionCode+1;
    }
    que.options.push({
      content:'',
      option : String.fromCharCode(nextOptionCode),
      key : ++this.localCounter
    });
    // this.setState({answerOptions : this.state.answerOptions})
    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }

  /*
  deleteOption(key,i){
    let answer = this.state.rightAnswer;
    if(this.state.rightAnswer.indexOf(i) === -1) {
      //删除的是最后一个
      answer = [];
    }
    for(let j=0; j<answer.length; j++){
        if(answer[j] > i) {
            answer[j] -= 1;
        }
    }
    keys.splice(i, 1);
    //keys = keys.filter(item => item.option !== key)
    for(let j = i;j<keys.length;j++) {
      keys[j].option = String.fromCharCode(keys[j].option.charCodeAt(0)-1);
      keys[j].key = keys[j].key - 1;
    }
    this.setState({rightAnswer: answer, fileList: keys});
  }*/
  deleteOption(key,i){
    let que = this.state.que;
    if(que.answer.indexOf(i) === -1) {
      //删除的是最后一个
      que.answer = [];
    }
    for(let j=0; j<que.answer.length; j++){
      if(que.answer[j] > i) {
          que.answer[j] -= 1;
      }
    }
    que.options.splice(i, 1);
    //keys = keys.filter(item => item.option !== key)
    for(let j = i;j<que.options.length;j++) {
      que.options[j].option = String.fromCharCode(que.options[j].option.charCodeAt(0)-1);
      que.options[j].key = que.options[j].key - 1;
    }

    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }

  onChange_0 = (e)=>{
    var que = this.state.que;
    que.tigan = e.target.value;
    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }

  onChange_1 = (value)=>{
    var que = this.state.que;
    que.fenzhi = value;
    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }

  tiChange(i, e){
    var que = this.state.que;
    que.options[i].content = e.target.value;
    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }


  render(){
    //验证
    this.state.que = this.state.que===''? this.props.question:this.state.que;
    this.localCounter = this.state.que===''?0:this.props.question.options.length;
    const answerList = this.state.que.options.map((item, i) => {
      return (
        <Row key = {item.key}>
          <Col span={15}>
            <FormItem
              label={'选项'+item.option}
            >      
              <Input addonAfter={<Checkbox checked={this.state.que.answer.indexOf(item.key) !== -1} onClick={this.clickWhichAnswer.bind(this,item.key)}>正确答案</Checkbox>}
                onChange={this.tiChange.bind(this,i)} defaultValue={item.content}/>
            </FormItem>
          </Col>
          <Col span={2} offset={1}>
            <Button icon={<DeleteOutlined />} onClick={this.deleteOption.bind(this,item.key,i)}></Button>
          </Col>
        </Row>
      )
    })

    return(
      <div>
        <Form>
        <FormItem>题型：<span style={{fontWeight:"bold"}}>多选题</span></FormItem>
        <FormItem
            label="题目"
            rules={[{ required: true, message: '请输入测试名称!' }]}
           >
              <Row>
                <Col span={24}>
                  <TextArea rows={4} defaultValue={this.state.que.tigan} onChange={this.onChange_0}/>
                </Col>
              </Row>
          </FormItem>
          <FormItem
            label="分值"
            rules={[{ required: true, message: '请输入测试名称!' }]}
           >
              <Row>
                <Col span={24}>
                  <InputNumber onChange={this.onChange_1} defaultValue={this.state.que.fenzhi}/>
                </Col>
              </Row>
          </FormItem>
          {answerList}
          <FormItem 
          >
            <Button className="f-r" onClick={this.addOption.bind(this)} style = {{float:"left"}} icon={<PlusSquareOutlined />}>
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default QMultiple;
