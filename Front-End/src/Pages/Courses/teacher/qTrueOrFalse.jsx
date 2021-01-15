//单选题
import React from 'react';
import ReactDOM from 'react-dom'

import { Form,Input,Select,Radio,Row,Col, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

class QTrueOrFalse extends React.Component {
  constructor(){
    super();
    this.state = {
        que: ''
    }
  }

  //点击答案
  clickWhichAnswer(option){
    let que = this.state.que;
    que.answer = option;
    this.setState({que : que})
    this.props.onChange0(this.state.que, this.props.index);
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

  render(){
    //验证
    this.state.que = this.state.que===''? this.props.question:this.state.que;
    return(
      <div>
        <Form>
        <FormItem>题型：<span style={{fontWeight:"bold"}}>判断题</span></FormItem>
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
          <FormItem label = "答案：">
          <Radio value={0}  checked={this.state.que.answer === 0} onClick={this.clickWhichAnswer.bind(this,0)}>正确</Radio>
          <Radio value={1}  checked={this.state.que.answer === 1} onClick={this.clickWhichAnswer.bind(this,1)}>错误</Radio>  
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default QTrueOrFalse;