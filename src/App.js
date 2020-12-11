import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LoginPage from "./MainPage/LoginPage";
import Navigator from "./MainPage/Navigator";
// import Axios from "axios";


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = "/" component = {LoginPage}/>
                        <Route path={"/main"} component={Navigator} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
