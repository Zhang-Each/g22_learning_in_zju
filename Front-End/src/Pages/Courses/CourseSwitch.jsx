import React from "react";
import {Layout, Menu} from "antd";
import {Route, Switch} from "react-router";
import _Course from "../Courses/Course2";
import StudentHomeworkIndex from "./StudentHomeworkIndex";
import StudentHomework from "./StudentHomework";
import StudentTestIndex from "./StudentTestIndex";
import StudentTest from "./StudentTest";
import Message from "../Message/Message";
import StudentTestDetail from "./StudentTestDetail";
import TeaTest from "./teacher/TestTea.jsx";
import TeaHomework from "./teacher/HomeworkTea";
import HomeworkCorrect from "./teacher/correctHomework1"
import HomeworkCorrect2 from "./teacher/correctHomework2"
import HomeworkEdit from "./teacher/EditHomework"
import TestCorrect from "./teacher/correctTest1";
import TestCorrect2 from "./teacher/correctTest2";
import TestEdit from "./teacher/EditTest";
import QuestionPool from "./teacher/EditDataBase"
import MessageBoard from "./MessageBoard/MessageBoard";
import EditNotice from "./teacher/EditNotice";
import TeaNoticeList from "./teacher/NoticeList";

export default class CourseSwitch extends React.Component{
    render(){
        return(
            <Switch>
                {/* _Course 是瞎写的，需要各个部分的人改成对应的component */}
                <Route path={"/main/courses/student/introduction"} component={_Course} />
                <Route path={"/main/courses/student/homework_index"} component={StudentHomework} />
                <Route path={"/main/courses/student/homework"} component={StudentHomeworkIndex} />
                <Route path={"/main/courses/student/test_index"} component={StudentTest} />
                <Route path={"/main/courses/student/test"} component={StudentTestIndex} />
                <Route path={"/main/courses/student/test_detail"} component={StudentTestDetail} />
                <Route path={"/main/courses/student/material"} component={_Course} />
                <Route path={"/main/courses/student/notice"} component={Message} />
                <Route path={"/main/courses/student/discussion"} component={MessageBoard} />

                <Route path={"/main/courses/teacher/introduction"} component={_Course} />
                <Route path={"/main/courses/teacher/homework/correct_detail"} component={HomeworkCorrect2} />
                <Route path={"/main/courses/teacher/homework/edit"} component={HomeworkEdit} />
                <Route path={"/main/courses/teacher/homework/correct"} component={HomeworkCorrect} />
                <Route path={"/main/courses/teacher/homework"} component={TeaHomework} />
                <Route path={"/main/courses/teacher/question_pool"} component={QuestionPool} />
                <Route path={"/main/courses/teacher/test/correct_detail"} component={TestCorrect2} />
                <Route path={"/main/courses/teacher/test/edit"} component={TestEdit} />
                <Route path={"/main/courses/teacher/test/correct"} component={TestCorrect} />
                <Route path={"/main/courses/teacher/test"} component={TeaTest} />
                <Route path={"/main/courses/teacher/material"} component={_Course} />
                <Route path={"/main/courses/teacher/notice/edit"} component={EditNotice} />
                <Route path={"/main/courses/teacher/notice"} component={TeaNoticeList} />
                <Route path={"/main/courses/teacher/discussion"} component={MessageBoard} />
                            
                <Route path={"/main/courses/assistant/introduction"} component={_Course} />
                <Route path={"/main/courses/assistant/homework"} component={_Course} />
                <Route path={"/main/courses/assistant/test"} component={_Course} />
                <Route path={"/main/courses/assistant/material"} component={_Course} />
                <Route path={"/main/courses/assistant/notice"} component={_Course} />
                <Route path={"/main/courses/assistant/discussion"} component={MessageBoard} />
            </Switch>
        );
        
    }
}


/*

*/