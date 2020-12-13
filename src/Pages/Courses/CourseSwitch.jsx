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
export default class CourseSwitch extends React.Component{
    render(){
        return(
            <Switch>
                {/* _Course 是瞎写的，需要各个部分的人改成对应的component */}
                <Route path={"/main/courses/student/introduction"} component={_Course} />
                <Route path={"/main/courses/student/homework_index"} component={StudentHomeworkIndex} />
                <Route path={"/main/courses/student/homework"} component={StudentHomework} />
                <Route path={"/main/courses/student/test_index"} component={StudentTestIndex} />
                <Route path={"/main/courses/student/test"} component={StudentTest} />
                <Route path={"/main/courses/student/test_detail"} component={StudentTestDetail} />
                <Route path={"/main/courses/student/material"} component={_Course} />
                <Route path={"/main/courses/student/notice"} component={Message} />
                <Route path={"/main/courses/student/discussion"} component={_Course} />

                <Route path={"/main/courses/teacher/introduction"} component={_Course} />
                <Route path={"/main/courses/teacher/homework"} component={_Course} />
                <Route path={"/main/courses/teacher/test"} component={_Course} />
                <Route path={"/main/courses/teacher/material"} component={_Course} />
                <Route path={"/main/courses/teacher/notice"} component={_Course} />
                <Route path={"/main/courses/teacher/discussion"} component={_Course} /> 
                            
                <Route path={"/main/courses/assistant/introduction"} component={_Course} />
                <Route path={"/main/courses/assistant/homework"} component={_Course} />
                <Route path={"/main/courses/assistant/test"} component={_Course} />
                <Route path={"/main/courses/assistant/material"} component={_Course} />
                <Route path={"/main/courses/assistant/notice"} component={_Course} />
                <Route path={"/main/courses/assistant/discussion"} component={_Course} />         
            </Switch>
        );
        
    }
}


/*

*/