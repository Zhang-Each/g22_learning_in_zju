import React from "react";
import {Layout, Card, Collapse, Typography, Button, Modal, Upload, message, Input, Tooltip, Table} from "antd";
import {Link} from "react-router-dom";
import Markdown from 'react-remarkable';

const {Content, Footer, Sider} = Layout;
const { Panel } = Collapse;
const { Dragger } = Upload;
const { TextArea } = Input;

const DTestRequirement = {
    title: "测试8——存储和文件系统",
    grade_proportion: 0.020,
    show_grade_time: new Date("2020.10.17 23:55"),
    start_time: new Date("2020.09.29 19:37"),
    end_time: new Date("2020.10.17 23:55"),
    submit_form: "个人测试",
    introduction: `本测试由4道选择构成`,
    is_show_grade: 1,
    teacher_grading_percentage: 990,
    peer_grading_percentage: 10
}

const SubmissionList = [
    {
        status: 1,
        date: new Date("2020.09.30 11:37"),
        final_score: 95,
    },
    {
        status: 0,
        date: new Date("2020.10.02 08:37"),
        final_score: 0,
    }
]

class DoTestButton extends React.Component {
    render() {
        return <>{this.props.enabled 
        ? <Button type="primary" onClick={this.showModal}>写作业</Button>
        : <Tooltip placement="top" title="测试已截止，无法提交"><Button type="primary" disabled>写测试</Button></Tooltip>}</>
    }
}

class TestRequirement extends React.Component {
    render() {
        return (
            <>
                <Card title="测试要求">
                    <p>{`占成绩比例：${this.props.grade_proportion*100}%`}</p>
                    <p>{`测试开放时间：${this.props.start_time.toLocaleString()}`}</p>
                    <p>{`测试截止时间：${this.props.end_time.toLocaleString()}`}</p>
                    <p>{`公布成绩时间：${this.props.is_show_grade ? (this.props.show_grade_time.getTime() === this.props.end_time.getTime() ? "马上公布" : this.props.show_grade_time.toLocaleString()) : "不公布"}`}</p>
                    <p>{`测试形式：${this.props.submit_form}`}</p>
                </Card>
                <Card title="测试简介">
                    <Markdown source={this.props.introduction} />
                </Card>
                
            </>
        )
    }
}

class TestMySubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns : [
                {
                  title: '提交日期',
                  dataIndex: 'date',
                  key: 'date',
                  render: date => date.toLocaleString()
                },
                {
                  title: '成绩',
                  dataIndex: 'final_score',
                  key: 'final_score',
                },
                {
                  title: '查看详情',
                  dataIndex: 'more',
                  key: 'more',
                  render: (v) => <Link to="/main/courses/student/test_detail">查看详情</Link>
                },
              ]
        }
    }
    render() {
        return (
            <Card title="我的提交" extra={<DoTestButton enabled={(new Date()).getTime() < this.props.end_time.getTime()}/>}>
                <Table dataSource={this.props.SubmissionList} columns={this.state.columns}/>
            </Card>
        )
    }
}

export default class StudentTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DTestRequirement: DTestRequirement,
            SubmissionList: SubmissionList
        }
    }
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <TestRequirement {...this.state.DTestRequirement} />
                <TestMySubmission end_time={this.state.DTestRequirement.end_time} SubmissionList={this.state.SubmissionList}/>
            </Layout>
        );
    }

}