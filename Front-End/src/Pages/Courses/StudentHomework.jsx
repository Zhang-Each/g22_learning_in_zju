import React from "react";
import {Layout, Card, Collapse, Typography, Button, Modal, Upload, message, Input, Tooltip} from "antd";
import { InboxOutlined } from '@ant-design/icons';
import Markdown from 'react-remarkable';
import Latex from 'react-latex';

const {Content, Footer, Sider} = Layout;
const { Panel } = Collapse;
const { Link } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;

const DHomeworkRequirement = {
    title: "BNF推导",
    grade_proportion: 0.020,
    show_grade_time: new Date("2020.10.17 23:55"),
    start_time: new Date("2020.09.29 19:37"),
    end_time: new Date("2020.10.17 23:55"),
    submit_form: "个人作业",
    introduction: `Using the following grammar, show whether it is possible to generate a parse tree for the statements given. If so, show its leftmost derivation.

\`\`\`
<assign> -> <id> = <expr>
<id> -> A | B | C
<expr> -> <expr> + <term> | <term>
<term> -> <term> * <factor> | <factor>
<factor> -> ( <expr> ) | <id>
\`\`\`
    
    1. A = A * B + C * A 
    2. A = B + C * (A + B) `,
    is_show_grade: 1,
    teacher_grading_percentage: 990,
    peer_grading_percentage: 10
}

const SubmissionList = [
    {
        status: 1,
        date: new Date("2020.09.30 11:37"),
        final_score: 95,
        comment: "推导树格式不规范",
        material: 
        {
            name: "ppl-bnf-doc.md",
            url: "https://ant.design"
        }
    },
    {
        status: 0,
        date: new Date("2020.10.02 08:37"),
        final_score: 0,
        comment: "",
        material: 
        {
            name: "ppl-bnf-doc2.md",
            url: "https://www.baidu.com"
        }
    }
]

class HomeworkRequirement extends React.Component {
    render() {
        return (
            <>
                <Card title="作业要求">
                    <p>{`占成绩比例：${this.props.grade_proportion*100}%`}</p>
                    <p>{`作业开放时间：${this.props.start_time.toLocaleString()}`}</p>
                    <p>{`作业截止时间：${this.props.end_time.toLocaleString()}`}</p>
                    <p>{`公布成绩时间：${this.props.is_show_grade ? (this.props.show_grade_time.getTime() === this.props.end_time.getTime() ? "马上公布" : this.props.show_grade_time.toLocaleString()) : "不公布"}`}</p>
                    <p>{`作业形式：${this.props.submit_form}`}</p>
                    <p>{`评分方式：教师${this.props.teacher_grading_percentage/10}%` + ((this.props.peer_grading_percentage === 0) ? "" : `+互评${this.props.peer_grading_percentage/10}%`)}</p>
                </Card>
                <Card title="作业简介">
                    <Markdown source={this.props.introduction} />
                </Card>
                
            </>
        )
    }
}

const Uploadprops = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class DoHomeworkButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading : false,
            draggerConfig: {
                name: 'file',
                multiple: false,
                action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                onChange(info) {
                    const { status } = info.file;
                        if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                    }
                    if (status === 'done') {
                        message.success(`${info.file.name} file uploaded successfully.`);
                    } else if (status === 'error') {
                        message.error(`${info.file.name} file upload failed.`);
                    }
                }
            }
        }
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    render() {
        return <>{this.props.enabled 
        ? <Button type="primary" onClick={this.showModal}>写作业</Button>
        : <Tooltip placement="top" title="作业已截止，无法提交"><Button type="primary" disabled>写作业</Button></Tooltip>}
            <Modal 
                title="提交面板"
                visible={this.state.visible}
                onOk={this.handleOk}
                okText="上传"
                confirmLoading={this.state.confirmLoading}
                onCancel={this.handleCancel}
                cancelText="取消"
            >
                <Dragger {...this.state.draggerConfig}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击或将文件拖入此处以上传</p>
                    <p className="ant-upload-hint">
                        当前系统支持单文件上传与批量上传
                    </p>
                </Dragger>
            </Modal>
        </>
    }
    handleOk() {
        this.setState({confirmLoading: true});
        setTimeout(() => {this.setState({visible: false, confirmLoading: false})}, 2000);
    }
    handleCancel() {
        this.setState({visible: false});
    }
    showModal() {
        this.setState({visible: true});
    }
}

class AppealButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading : false
        }
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    render() {
        return <>{this.props.enabled 
        ? <Button type="primary" onClick={this.showModal}>申诉</Button>
        : <Tooltip placement="top" title="提交未批改或在申诉中"><Button type="primary" disabled>申诉</Button></Tooltip>}
            <Modal 
                title="提交面板"
                visible={this.state.visible}
                onOk={this.handleOk}
                okText="上传"
                confirmLoading={this.state.confirmLoading}
                onCancel={this.handleCancel}
                cancelText="取消"
            >
                <TextArea rows={4} />
            </Modal>
        </>
    }
    handleOk() {
        this.setState({confirmLoading: true});
        setTimeout(() => {this.setState({visible: false, confirmLoading: false})}, 2000);
    }
    handleCancel() {
        this.setState({visible: false});
    }
    showModal() {
        this.setState({visible: true});
    }
}

class HomeworkMySubmission extends React.Component {
    render() {
        return (
            <Card title="我的提交" extra={<DoHomeworkButton enabled={(new Date()).getTime() < this.props.end_time.getTime()}/>}>
                <Collapse>
                    {this.props.SubmissionList.map((Submission) => {
                        return (
                            <Panel header={Submission.date.toLocaleString()} extra={<AppealButton enabled={Submission.status === 1} />}>
                                {Submission.status === 0 ? <p>状态：尚未批改</p> : <><p>状态：已批改</p><p>{`得分：${Submission.final_score}`}</p><p>{`评语：${Submission.comment}`}</p></>}
                                <Link href={Submission.material.url}>{`附件：${Submission.material.name}`}</Link>
                            </Panel>
                        )
                    })}
                </Collapse>
            </Card>
        )
    }
}

export default class StudentHomework extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DHomeworkRequirement: DHomeworkRequirement,
            SubmissionList: SubmissionList
        }
    }
    render() {
        return (
            /* 我个人认为课程的二级导航栏应该需要先获取当前用户所有的课程信息，然后映射成为二级导航栏，
            *  每个导航栏可以进入一门课程这样子，不知道诸位能不能实现我说的这个功能
            * */
            <Layout style={{height: '100vh'}}>
                <HomeworkRequirement {...this.state.DHomeworkRequirement} />
                <HomeworkMySubmission end_time={this.state.DHomeworkRequirement.end_time} SubmissionList={this.state.SubmissionList}/>
            </Layout>
        );
    }

}