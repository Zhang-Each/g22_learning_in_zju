import React from "react";
import {Layout, Card, Collapse, Typography, Button, message, Upload} from "antd";
import {InboxOutlined} from "@ant-design/icons";

const {Content, Footer, Sider} = Layout;
const { Panel } = Collapse;
const { Link } = Typography;
const { Dragger } = Upload;

const DHomeworkRequirement = {
    title: "BNF推导",
    grade_proportion: 0.020,
    show_grade_time: new Date("2020.10.17 23:55"),
    start_time: new Date("2020.09.29 19:37"),
    end_time: new Date("2020.10.17 23:55"),
    submit_form: "个人作业",
    introduction: "Using the following grammar, show whether it is possible to generate a parse tree for the statements given. If so, show its leftmost derivation.\n<assign> -> <id> = <expr>\n<id> -> A | B | C\n<expr> -> <expr> + <term> | <term>\n<term> -> <term> * <factor> | <factor>\n<factor> -> ( <expr> ) | <id>\n\n\nA = A * B + C * A \nA = B + C * (A + B) ",
    is_show_grade: 1,
    teacher_grading_percentage: 998,
    peer_grading_percentage: 2
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
            size: 114514,
            date: new Date("2020.09.30 11:35"),
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
            size: 1919810,
            date: new Date("2020.10.02 07:32")
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
                    {this.props.introduction.split("\n").map((v) => {return <p>{v}</p>})}
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

class UploadHomework extends React.Component {
    render() {
        return (
            <Card title="提交作业">
                <Dragger {...Uploadprops}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击此处或拖动文件以上传</p>
                    <p className="ant-upload-hint">
                        支持单次或批量上传
                    </p>
                </Dragger>
            </Card>
        );
    }
}

class DoHomeworkButton extends React.Component {
    render() {
        return this.props.enabled ? <Button type="primary" onClick={(e) => {console.log(e)}}>写作业</Button> : <Button type="primary" disabled>写作业（已截止无法提交）</Button>
    }
}

class HomeworkMySubmission extends React.Component {
    render() {
        return (
            <Card title="我的提交" extra={<DoHomeworkButton enabled={(new Date()).getTime() < this.props.end_time.getTime()}/>}>
                <Collapse>
                    {this.props.SubmissionList.map((Submission) => {
                        return (
                            <Panel header={Submission.date.toLocaleString()} extra={<Button type="primary" onClick={(e) => {console.log(e)}}>申诉</Button>}>
                                {Submission.status === 0 ? <p>尚未批改</p> : <><p>{`得分：${Submission.final_score}`}</p><p>{`评语：${Submission.comment}`}</p></>}
                                <Link href="https://ant.design">{`附件：${Submission.material.name}`}</Link>
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
                <UploadHomework/>
                <HomeworkMySubmission end_time={this.state.DHomeworkRequirement.end_time} SubmissionList={this.state.SubmissionList}/>
            </Layout>
        );
    }

}