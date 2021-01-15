//单选题
import React from 'react';
import ReactDOM from 'react-dom'

import { Form,Input,Select,Radio,Row,Col,Button,Upload,message,Modal, InputNumber } from 'antd';
import { PlusCircleOutlined, CheckSquareOutlined,FileTextOutlined, DeleteOutlined  } from '@ant-design/icons';
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

class QSingle extends React.Component {
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
    que.answer = option;
    this.setState({que : que})
    this.props.onChange0(this.state.que, this.props.index);
    // console.log(this.state.rightAnswer)
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

  //删除选项
  deleteOption(key,i){
    let que = this.state.que;
    if(i === que.answer) {
      //删除的是最后一个
      que.answer = -1;
    }
    if(que.answer > i) {
      que.answer -= 1;
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
              <Input addonAfter={<Radio checked={this.state.que.answer === item.key} onClick={this.clickWhichAnswer.bind(this,item.key)}>正确答案</Radio>} onChange={this.tiChange.bind(this,i)} defaultValue={item.content}/>
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
        <FormItem>题型：<span style={{fontWeight:"bold"}}>单选题</span></FormItem>
        <FormItem
            label="题目"
            rules={[{ required: true, message: '请输入题目名称!' }]}
           >
              <Row>
                <Col span={24}>
                  <TextArea rows={4}  defaultValue={this.state.que.tigan} onChange={this.onChange_0}/>
                </Col>
              </Row>
          </FormItem>
          <FormItem
            label="分值"
            rules={[{ required: true, message: '请输入题目分值!' }]}
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
            <Button className="f-r" onClick={this.addOption.bind(this)} style = {{float:"left"}} icon={<PlusCircleOutlined />}>

            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default QSingle;
