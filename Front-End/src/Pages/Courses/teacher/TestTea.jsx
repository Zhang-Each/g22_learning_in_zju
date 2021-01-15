import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import localStorage from './mockData';
import moment from 'moment';

// localStorage.list = []
//const list = localStorage.list ? JSON.parse(localStorage.list) : [];
//var localStorage = mockData; 

const newTest = {
    title: '请输入标题',
    date1: moment(),
    sdate1: "2020.12.30 19:30",
    date2: moment(),
    sdate2: "2020.12.30 19:30",
    time: 120,
    stage: '未开始',
    questions: []
};

class TestTea extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        
        this.handleEdit = this.handleEdit.bind(this);
       
        this.handleDelete = this.handleDelete.bind(this);
        this.state = { dataSource: localStorage};
    }

    handleAdd(){
        localStorage.push(newTest);
        var list = localStorage.slice[0];
        this.setState({dataSource: list});
        const path = {
            pathname: "/main/courses/teacher/test/edit",
            state:{index: localStorage.length-1}
        }
        this.props.history.push(path);
    }

    handleEdit(index) {
        const path = {
            pathname: "/main/courses/teacher/test/edit",
            state:{index: index}
        }
        this.props.history.push(path);
    }

    handleDelete(key, index) {
        if(localStorage[index]){
            /*
            var list = localStorage.slice(0);
            list.splice(index, 1);
            localStorage = list;
            this.setState({dataSource: localStorage});
            */
            localStorage.splice(index, 1);
            var list = localStorage.slice(0);
            this.setState({dataSource: list});
        } 
    }

    render() {
        var now = moment()
        for(let j=0; j<this.state.dataSource.length; j++){
            this.state.dataSource[j].sdate1 = this.state.dataSource[j].date1.toLocaleString();
            this.state.dataSource[j].sdate2 = this.state.dataSource[j].date2.toLocaleString();
            if(moment()<this.state.dataSource[j].date1) this.state.dataSource[j].stage = '未开始';
            else if(moment()>this.state.dataSource[j].date2) this.state.dataSource[j].stage = '已结束';
            else    this.state.dataSource[j].stage = '进行中';
        }
        const columns = [{
            title: '测试名称',
            dataIndex: 'title',
            key: 'title',
            width: '15%'
        }, {
            title: '开始时间',
            dataIndex: 'sdate1',
            key: 'sdate1',
            width: '25%'
        }, {
            title: '截止时间',
            dataIndex: 'sdate2',
            key: 'sdate2',
            width: '25%'
        }, {
            title: '当前状态',
            dataIndex: 'stage',
            key: 'stage',
            width: '15%'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => {
                let prevButton;
                switch (record.stage) {
                    case '未开始':
                        prevButton = <Button onClick={() => this.handleEdit(index)}>编辑测试</Button>
                        break;
                    case '进行中':
                        prevButton = (
                            <span>
                               <Link to="/main/courses/teacher/test/correct"><Button>批改测试</Button></Link>
                            </span>
                        );
                        break;
                    case '已结束':
                        prevButton = <Link to="/main/courses/teacher/test/correct"><Button>批改测试</Button></Link>
                        break;
                    default:
                        prevButton = <span></span>
                }
                return (
                    <span>
                        {prevButton}
                        <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key, index)}>
                            <Button style={{ marginLeft: 8 }}>删除测试</Button>
                        </Popconfirm>
                    </span>
                );
            }
        }];

        return (
            <div style={{marginTop:20}}>
            
                <Table columns={columns} dataSource={this.state.dataSource} pagination={false} />
                <Button type="primary" style={{ marginTop: 16, marginLeft: '30%', width: '40%', height: '40px' }} onClick={this.handleAdd}>添加测试</Button>
                <Link to="/main/courses/teacher/question_pool"><Button type="primary" style={{ marginTop: 30, marginLeft: '30%', width: '40%', height: '40px' }} >进入题库</Button></Link>
            </div>
        );
    }
}

export default TestTea;