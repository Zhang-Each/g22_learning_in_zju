import React from "react";
import axios from "axios";
import {Layout, Col, Row, Input, Modal, Button, Form, Card} from "antd";
import TextArea from "antd/lib/input/TextArea";
import getCookie from '../../../util';

const MessageListTest = [
    {
        "title": "通知1标题",
        "date": new Date("2020/12/26 20:07"),
        "comment": "内容内容内容内容"
    },
    {
        "title": "通知2标题",
        "date": new Date("2020/12/26 20:08"),
        "comment": "内容内容内容内容"
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <Row>
                {this.props.items.map(item => (
                    <Col span={12}>
                        <Card title={item.title}>
                            <p>{item.date.toLocaleString()}</p>
                            <p>{item.comment}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

class TeaNoticeList extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.inputContent = this.inputContent.bind(this)
        this.inputTitle = this.inputTitle.bind(this)
        this.state = {
            TotalMessageList: MessageListTest,
            FilteredMessageList: MessageListTest,
            page: 1,
            isModalVisible: false,
            title: null,
            content: null,
        }
    }
    showModal(){
        this.setState({
            isModalVisible: true,
        });
    };
    /*
        course_id和section_id应该是通过后端获取的，我先用了一个假的
    */
    handleOk(){
       var now = new Date();
       var time = now.toLocaleDateString() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
       var session_id = getCookie('session_id') 
       var newNotice={
            title: this.state.title,
            content: this.state.content,
            publish_time: time,
            course_id: '114',
            section_id: '514',
        }
        var url = 'http://127.0.0.1:8000/newNotice/'
        let data = {"notice":newNotice, "session_id": session_id,};
        axios.post(url,data).then(res=>{
            if(res.data.success===true){
                var NoticeList = [newNotice]
                for(let i=0; i<this.state.TotalMessageList.length; i++){
                    NoticeList[i+1] = this.state.TotalMessageList[i];
                }
                this.setState({
                    isModalVisible: false,
                    TotalMessageList: NoticeList,
                })
                alert('发布成功');
            }else{
                alert('发布失败');
            }
        })
    }
    handleCancel(){
        this.setState({
            isModalVisible: false,
        });
    };
    inputTitle = (event)=>{
        this.state.title = event.target.value;
    };
    inputContent = (event)=>{
        this.state.content = event.target.value;
    };
    render(){
        return(
        <Layout style={{marginTop:'30px'}}>
            <Row>
                <Col span={20}></Col>
                <Col span={4}>
                        <Button type="primary" size="large" onClick={()=>this.showModal()} >
                            发布新公告
                        </Button>
                </Col>
            </Row>
            <MessageList items={this.state.FilteredMessageList.slice((this.state.page-1)*10, this.state.page*10)} />
            <Modal title="发布新公告" width={'80%'} visible={this.state.isModalVisible} onOk={()=>this.handleOk()} onCancel={()=>this.handleCancel()} okText={'确认发布'} cancelText={'取消'}>
                <Form style={{ width: '68%' }} size="large">
                    <Form.Item label="公告标题" name="公告标题" rules={[{ required: true, message: '请输入公告标题!' }]}>
                        <TextArea rows={1} cols={40} value={this.state.title} onChange={this.inputTitle}/>
                    </Form.Item>
                    <Form.Item label="公告内容" name="公告内容" rules={[{ required: true, message: '请输入公告内容!' }]}>
                        <TextArea rows={16} cols={60} onChange={this.inputContent}/>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
  }
}

export default TeaNoticeList;