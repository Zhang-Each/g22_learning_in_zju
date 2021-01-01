//单选题
import React from 'react';
import ReactDOM from 'react-dom'

import { Form,Input,Select,Radio,Row,Col, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;


class QShortAnswer extends React.Component {
  constructor(){
    super();
    this.state = {
      que: ''
    }
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

  onChange_2 = (e)=>{
    var que = this.state.que;
    que.answer = e.target.value;
    this.setState({que:que});
    this.props.onChange0(this.state.que,this.props.index);
  }

  render(){
    //验证
    this.state.que = this.state.que===''? this.props.question:this.state.que;
    return(
      <div>
        <Form>
        <FormItem>题型：<span style={{fontWeight:"bold"}}>填空题</span></FormItem>
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
          <Input onChange={this.onChange_2} defaultValue={this.state.que.answer}/>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default QShortAnswer;