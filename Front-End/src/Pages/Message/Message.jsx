import React, {useState} from "react";
import {Layout, Menu, Pagination, Card, Space, DatePicker, Select, Input, Row, Col} from "antd";

const {Content} = Layout;
const {Search} = Input;

const MessageListTest = [
    {
        "text": "计算机系统原理",
        "date": new Date("2020.12.26 20:07"),
        "comment": "wdnmd"
    },
    {
        "text": "计算机系统原理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "计算机系统原理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl2",
        "date": new Date("2020.11.26 20:07"),
        "comment": "wdnmd2"
    },
    {
        "text": "nmsl233",
        "date": new Date("2020.11.26 20:07"),
        "comment": "nmslaaa"
    },
]

const { Option } = Select;

function TimeSwitcher(props) {
  const [type, setType] = useState('date');
  return (
    <Space>
      <Select value={type} onChange={(v) => {setType(v);props.onChangeDateType(v);}}>
        <Option value="date">日期</Option>
        <Option value="month">月</Option>
        <Option value="year">年</Option>
      </Select>
      <DatePicker picker={type} onChange={(v) => {props.onChangeDate(v);}} />
    </Space>
  );
}

/**
 * 消息通知页面，预期做出消息的展示、过滤等功能
 * 有条件的情况下可以考虑做分页功能
 */

class CourseNameSwitcher extends React.Component {
    render() {
        return (
            <Search placeholder="输入课程名" onSearch={this.props.onSearch} enterButton />
        )
    }
}

class MessageFilter extends React.Component {
    render() {
        return (
            <Space>
                <Card title="选择时间">
                    <TimeSwitcher onChangeDate={this.props.onChangeDate} onChangeDateType={this.props.onChangeDateType}/>
                </Card>
                <Card title="选择课程名">
                    <CourseNameSwitcher onSearch={this.props.onSearch}/>
                </Card>
            </Space>
        )
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <Row>
                {this.props.items.map(item => (
                    <Col span={12}>
                        <Card title={item.text}>
                            <p>{item.date.toLocaleDateString()}</p>
                            <p>{item.comment}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TotalMessageList: MessageListTest,
            FilteredMessageList: MessageListTest,

            name: "",
            date: null,
            dateType: "",
            page: 1
        }
        this.handleSearchName = this.handleSearchName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeDateType = this.handleChangeDateType.bind(this);
    }
    render() {
        return (
            <Layout>
                <Content lassName="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <MessageFilter onChangeDate={this.handleChangeDate} onChangeDateType={this.handleChangeDateType} onSearch={this.handleSearchName}/>
                    <MessageList items={this.state.FilteredMessageList.slice((this.state.page-1)*10, this.state.page*10)} />
                    <Pagination onChange={(page) => {this.setState({page: page})}} total={this.state.FilteredMessageList.length} />
                </Content>
            </Layout>
        );
    }
    handleChangeDate(date) {
        this.setState({date: date}, () => {this.updateFilteredMessageList();});
    }
    handleChangeDateType(dateType) {
        this.setState({dateType: dateType}, () => {this.updateFilteredMessageList()});
    }
    handleSearchName(name) {
        this.setState({name: name}, () => {this.updateFilteredMessageList()});
    }
    updateFilteredMessageList() {
        this.setState((state) => {
            var FilteredMessageList = state.TotalMessageList.filter(v => {return v.text.indexOf(state.name) !== -1});
            FilteredMessageList = FilteredMessageList;
            while(1) {
                if(state.date === null) break;
                FilteredMessageList = FilteredMessageList.filter(v => {return v.date.getFullYear() === state.date._d.getFullYear();});
                if(state.dateType === "year") break;
                FilteredMessageList = FilteredMessageList.filter(v => {return v.date.getMonth() === state.date._d.getMonth();});
                if(state.dateType === "month") break;
                FilteredMessageList = FilteredMessageList.filter(v => {return v.date.getDate() === state.date._d.getDate();});
                break;
            }
            return {
                FilteredMessageList: FilteredMessageList,
                page: 1 // BUG!
            }; 
        })
    }
}
