import React from "react";
import { Link } from 'react-router-dom';
import {Layout, Input, InputNumber, Select, DatePicker, Upload, message, Button, Form} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import localHomework from './mockData2';
const { TextArea } = Input;
const { Option } = Select;
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

class EditHomework extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.data = '';
    }

    onOk1 = (value)=>{
      this.data.date1 = value;
      this.data.sdate1 = value.toLocaleString()
    }

    onOk2 = (value)=>{
      this.data.date2 = value;
      this.data.sdate2 = value.toLocaleString()
    }

    onChange1 = (event)=>{
      this.data.title = event.target.value;
    }

    onChange1 = (event)=>{
      this.data.title = event.target.value;
    }

    onChange4 = (value)=>{
      this.data.zhanbi = value;
    }

    onChange5 = (value)=>{
      this.data.form = value;
    }

    onChange6 = (event)=>{
      this.data.yaoqiu = event.target.value;
    }

    onClick(){
      var id = this.props.location.state.index;
      if(this.data.title === '')  alert("标题不能为空！");
      else{
        localHomework[id] = this.data;
        alert("作业编辑成功！");
      }
    }

    render() {
        var id = this.props.location.state.index;
        this.data = this.data===''?localHomework[id]:this.data;
        return(
        <Layout style={{ margin: '30px 0 0 0', padding: '30px 30px', height: '80vh',width: '85%', background:'#ffffff' }}>
            <Form style={{ width: '68%' }} size="large">
                <Form.Item label="作业名称" name="作业名称" 
                 rules={[{ required: true, message: '请输入作业名称!' }]}>
                  <Input defaultValue={localHomework[id].title} onChange={this.onChange1}/>
                </Form.Item>
                <Form.Item label="作业起始时间">
                  <DatePicker showTime onOk={this.onOk1} defaultValue={localHomework[id].date1}/>
                </Form.Item>
                <Form.Item label="作业截止时间">
                  <DatePicker showTime onOk={this.onOk2} defaultValue={localHomework[id].date2}/>
                </Form.Item>
                <Form.Item label="作业占比(%)">
                  <InputNumber min={0} max={100} defaultValue={localHomework[id].zhanbi} formatter={value => `${value}%`} 
                    parser={value => value.replace('%', '')}  onChange={this.onChange4}/>
                </Form.Item>
                <Form.Item label="作业形式">
                  <Select
                    showSearch
                    style={{ width: 200 }} defaultValue={localHomework[id].form}
                    onChange={this.onChange5}>
                    <Option value="个人作业">个人作业</Option>
                    <Option value="小组作业">小组作业</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="作业要求">
                    <TextArea rows={8} defaultValue={localHomework[id].yaoqiu} onChange={this.onChange6}/>
                </Form.Item>
                <Form.Item label="上传附件">
                  <Upload {...props1}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                <Button type="primary" onClick={this.onClick}>
                   保存
                </Button>
                <Link to="/main/courses/teacher/homework">
                <Button type="primary" style={{marginLeft: '100px'}}>
                    返回
                </Button>
                </Link>
                </Form.Item>

            </Form>
        </Layout>
        );
    }
}

export default EditHomework;

/*
<Form.Item>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="个人作业">个人作业</Option>
                    <Option value="小组作业">小组作业</Option>
                </Select>
                </Form.Item>
*/