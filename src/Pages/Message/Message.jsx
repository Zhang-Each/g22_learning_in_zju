import React, {useState} from "react";
import {Layout, Menu, Pagination, Card, Space, DatePicker, Select, Input, Row, Col} from "antd";

const {Content} = Layout;
const {Search} = Input;

const MessageListTest = [
    {
        "text": "计算机系统原理",
        "date": new Date("2020.12.26 20:07"),
        "comment": "大家不要忘了期末考试"
    },
    {
        "text": "计算机系统原理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "计算机系统原理被评为软工优秀课程"
    },
    {
        "text": "计算机系统原理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "计算机系统原理作业1发布"
    },
    {
        "text": "软件工程管理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "不要忘了本周上机课"
    },
    {
        "text": "软件工程管理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "个人作业1.1和1.2提交即将截止"
    },
    {
        "text": "操作系统",
        "date": new Date("2020.11.26 20:07"),
        "comment": "下节课研究国产操作系统未来发展趋势"
    },
    {
        "text": "计算机网络",
        "date": new Date("2020.11.26 20:07"),
        "comment": "下节课讲网络层相关内容并QUIZ"
    },
    {
        "text": "软件需求工程",
        "date": new Date("2020.11.26 20:07"),
        "comment": "UML个人作业截止日期12.25"
    },
    {
        "text": "软件质量保证与测试",
        "date": new Date("2020.11.26 20:07"),
        "comment": "本课程老师是个光头"
    },
    {
        "text": "软件质量保证与测试",
        "date": new Date("2020.11.26 20:07"),
        "comment": "小组作业要做爬虫！"
    },
    {
        "text": "软件质量保证与测试",
        "date": new Date("2020.11.26 20:07"),
        "comment": "期末考之前会划重点"
    },
    {
        "text": "软件工程管理",
        "date": new Date("2020.11.26 20:07"),
        "comment": "上课不来点名一次扣五分"
    },
    {
        "text": "Java应用技术",
        "date": new Date("2020.11.26 20:07"),
        "comment": "本学期所有作业已经布置完毕，请大家按时提交"
    },
    {
        "text": "毛概",
        "date": new Date("2020.11.26 20:07"),
        "comment": "本周外出教学"
    },
    {
        "text": "软件需求工程",
        "date": new Date("2020.11.26 20:07"),
        "comment": "需求规格说明书提交即将截止"
    },
    {
        "text": "软件需求工程",
        "date": new Date("2020.11.26 20:07"),
        "comment": "第二次需求访谈"
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
