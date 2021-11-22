import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserAdd from "../components/UsersAdd";
import Header from "../components/Header";
import UsersList from "../components/UsersList";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="main-content">
                    <Switch>
                        <Route component={UsersList} path="/" exact={true}/>
                        <Route component={UserAdd} path="/add"/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;