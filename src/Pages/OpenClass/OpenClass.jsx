import React, {Component} from "react";
import {
    Layout,
    Menu,
    message,
    Upload,
    Modal,
    Button,
    Input,
    notification,
    Table,
    Form,
    Pagination,
    Space,
    Card, Row, Col
} from "antd";
import "./OpenClass.css"

const {Content} = Layout;
const {Search} = Input;

const OpenClasses = [
    {
        "name"          : "杭州楼建筑研究",
        "teacher"       : "楼学庆",
        "type"          : "专业课程",
        "institution"   : "计算机科学与技术学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130848.jpg'
    },
    {
        "name"          : "深入理解Jeep Car",
        "teacher"       : "楼学庆",
        "type"          : "通识选修课程",
        "institution"   : "能源工程学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130833.jpg'
    },
    {
        "name"          : "Java应用技术",
        "teacher"       : "鲁伟明",
        "type"          : "精品课程课程",
        "institution"   : "计算机科学与技术学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130835.jpg'
    },
    {
        "name"          : "杭州道路通史",
        "teacher"       : "楼学庆",
        "type"          : "专业课程",
        "institution"   : "建筑工程学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130837.jpg'
    },
    {
        "name"          : "微积分",
        "teacher"       : "苏德矿",
        "type"          : "通识必修课程",
        "institution"   : "数学科学学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130835.jpg'
    },
    {
        "name"          : "计算机网络",
        "teacher"       : "邱劲松站",
        "type"          : "专业课程",
        "institution"   : "计算机科学与技术学院",
        "img_src"       : 'http://studyinzju.oss-cn-hangzhou-zjucloud-d01-a.res.cloud.zju.edu.cn/1623007066724130833.jpg'
    },
]

class CourseNameSwitcher extends React.Component {
    render() {
        return (
            <Search placeholder="输入课程名" onSearch={this.props.onSearch} enterButton />
        )
    }
}

class CourseFilter extends React.Component {
    render() {
        return (
            <Space>
                <Card title="选择课程名">
                    <CourseNameSwitcher onSearch={this.props.onSearch}/>
                </Card>
            </Space>
        )
    }
}

class CourseList extends React.Component {
    render() {
        return (
            <div className="courseContainer">
                <div className="sectionBlock">
                    <Row>
                        {this.props.items.map(item => (
                            <Col span={8}>
                                <div className="sectionItem1">
                                    <div className="sectionBox">
                                        <img src={item.img_src}/>
                                        <div className="sectionMsg">
                                            <p className="courseTitle">{item.name}</p>
                                            <p>
                                                <span className="courseTeacher">{item.teacher}</span>
                                                <span className="courseType">{item.type}</span>
                                            </p>
                                            <p className="courseTeacher">{item.institution}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        )
    }
}

/**
 * 公开课页面，所有人都能看到的课程信息
 */
class OpenClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TotalMessageList: OpenClasses,
            FilteredCourses: OpenClasses,

            name: "",
            date: null,
            dateType: "",
            page: 1
        }
        this.handleSearchName = this.handleSearchName.bind(this);
    }
    render() {
        return (
            <Layout>
                <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 300,}}>
                    <CourseFilter onSearch={this.handleSearchName}/>
                    <CourseList items={this.state.FilteredCourses.slice((this.state.page-1)*10, this.state.page*10)} />
                    <Pagination onChange={(page) => {this.setState({page: page})}} total={this.state.FilteredCourses.length} />
                </Content>
            </Layout>
        );
    }
    handleSearchName(name) {
        this.setState({name: name}, () => {this.updateFilteredCourses()});
    }
    updateFilteredCourses() {
        this.setState((state) => {
            let FilteredCourses = state.TotalMessageList.filter(v => {return v.name.indexOf(state.name) !== -1});
            return {
                FilteredCourses: FilteredCourses,
                page: 1 // BUG!
            };
        })
    }
}

export default OpenClass