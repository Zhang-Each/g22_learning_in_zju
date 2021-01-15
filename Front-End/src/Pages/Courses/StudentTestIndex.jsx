import React from "react";
import {Layout, Card, List, Tag} from "antd";
import {Link} from "react-router-dom";

const DTestRequirementList = [
    {
        title: "BNF推导",
        start_time: new Date("2020.09.29 19:37"),
        end_time: new Date("2020.10.17 23:55"),
        submit_form: "个人测试",
        submit_times: 2,
    },
    {
        title: "BNF推导2",
        start_time: new Date("2020.09.29 19:37"),
        end_time: new Date("2021.01.25 23:55"),
        submit_form: "个人测试",
        submit_times: 0,
    }
]

export default class StudentTestIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DTestRequirementList: DTestRequirementList
        }
    }
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Card title="测试列表">
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.DTestRequirementList}
                        renderItem={(item) => (
                            <List.Item
                                actions={[<Link to={"/main/courses/student/test"}>查看详情</Link>]}
                            >
                                <List.Item.Meta
                                    title={`${item.title}（截止日期：${item.end_time.toLocaleString()}）`}
                                    description={
                                        <>
                                            {item.submit_times > 0
                                            ? <Tag color="success">已提交</Tag>
                                            : <></>}
                                            {(new Date()).getTime() > item.end_time.getTime()
                                            ? <Tag color="error">已截止</Tag>
                                            : <></>}
                                        </>}
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )}
                    />
                </Card>
            </Layout>
        );
    }

}