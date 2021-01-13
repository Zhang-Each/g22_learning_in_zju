import React from "react";
import { Link } from 'react-router-dom';
import {Layout, Input, InputNumber, Select, DatePicker, Upload, message, Button, Form, Card} from "antd";
const { TextArea } = Input;


class EditNotice extends React.Component {
  constructor(){
    super();
    this.state = {
      addAreaVisible: 0,
      test: '',
      title: '标题',
      content: '内容'
    }
    console.log("cnmdb");
  }

  render(){
    return(
        <Layout style={{marginTop:'30px'}}>
          haha
        </Layout>
    );
  }
}

export default EditNotice;

/*
<Card title="编辑公告">
            <Form style={{ width: '68%' }} size="large">
              <Form.Item label="公告标题" name="公告标题"  rules={[{ required: true, message: '求输入公告标题' }]}>
                <Input value={this.state.title}/>
              </Form.Item>
              <Form.Item label="公告内容">
                <TextArea rows={4} value={this.state.content}/>
              </Form.Item>
            </Form>
          </Card>    
*/
/*
<Form style={{marginTop:'20px'}}>
            <Form.Item>
              <Button type="primary" onClick={}>
                保存
              </Button>
              <Link to="/main/courses/teacher/test">
              <Button type="primary" style={{marginLeft: '100px'}}>
                返回
              </Button>
              </Link>
          </Form.Item></Form>
 */