import React from "react";
import {Card, Layout, Menu, message, Upload} from "antd";
import {Route, Switch} from "react-router";
import CourseMenuList from "./CourseMenuList";
import {UserOutlined, LaptopOutlined, InboxOutlined} from '@ant-design/icons';

import downloadImg from "./images/download.png";
const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const {Dragger} = Upload;

const Uploadprops = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',// 文件上传的地址
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
    defaultFileList: [
        {
            uid: '1',
            name: 'zju.png',
            status: 'done',
            url: 'http://www.zju.edu.cn/_upload/tpl/05/e5/1509/template1509/images/logo.png',
        },
        {
            uid: '2',
            name: 'zyc.pdf',
            status: 'done',
            url: 'http://file.cc98.org/v2-upload/gr0al454.pdf',
        },
    ],
    showUploadList: {
        showPreviewIcon: true,
        showDownloadIcon: true,
        showRemoveIcon: true
    },
};

class UploadFile extends React.Component {
    render() {
        return (
            <Card title="上传课件">
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

export default class Course extends React.Component {
    render() {
        return (
            /* 我个人认为课程的二级导航栏应该需要先获取当前用户所有的课程信息，然后映射成为二级导航栏，
            *  每个导航栏可以进入一门课程这样子，不知道诸位能不能实现我说的这个功能
            * */
            <UploadFile/>
        );
    }

}