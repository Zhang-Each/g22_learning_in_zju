import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import scoreInfom from './mockData3';

class CorrectTest1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataSource: scoreInfom };
    }

    handleCorrect(index) {
        const path = {
            pathname: "/main/courses/teacher/test/correct_detail",
            state: {index:index}
        }
        this.props.history.push(path);
    }

    render() {
        const columns = [{
            title: '学生姓名',
            dataIndex: 'name',
            key: 'name',
            width: '25%'
        }, {
            title: '学生学号',
            dataIndex: 'std',
            key: 'std',
            width: '25%'
        }, {
            title: '得分',
            dataIndex: 'score',
            key: 'score',
            width: '25%'
        }, {
            title: '阅卷',
            key: 'action',
            render: (text, record, index) => {
                return (
                    <span>
                        <Button onClick={this.handleCorrect.bind(this,index)}>批改测试</Button>
                    </span>
                );
            }
        }];

        return (
            <div style={{marginTop:20}}>
                <Table columns={columns} dataSource={this.state.dataSource} pagination={false} />
                {/* 两行按钮 */}
                {/* <Link to="/edit"><Button type="primary" style={{ marginTop: 16, width: '100%', height: '40px' }} onClick={this.handleAdd}>新建问卷</Button></Link>
                <Button style={{ marginTop: 16, width: '100%', height: '40px' }} onClick={this.handleReset}初始化</Button> */}
                {/* 一行按钮，左右放 */}
            {/*   <Button style={{ marginTop: 16, width: '49%', height: '40px' }} onClick={this.handleReset}>测试用</Button>*/}
                <Link to="/main/courses/teacher/test"><Button type="primary" style={{ marginTop: 16, marginLeft: '30%', width: '40%', height: '40px' }} >返回</Button></Link>
            </div>
        );
    }
}

export default CorrectTest1;