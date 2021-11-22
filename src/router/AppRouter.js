import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserAdd from "../components/UsersAdd";
import Header from "../components/Header";
import UsersList from "../components/UsersList";
import axios from 'axios';
import { get } from "lodash";

const BASE_URL = "http://localhost:3030/users";

const AppRouter = () => {
    let users = [];

    const getUsers = async () => {
        
        await axios.get(BASE_URL + "/all", {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control': '*'
            }
        }).then((response) => {
            users = response.data;
            localStorage.setItem(`users`, users);
            return users;
        }).catch((error) => {
            console.log('error', error)
        })

    }

    return (
        
        <BrowserRouter>
            <div>
                <Header/>
                <div className="main-content">
                    <Switch>
                        <Route render={(props) => {
                            return <UsersList {...props} users={getUsers()}></UsersList>
                        }} path="/" exact={true}/>
                        <Route render={(props) => {
                            return <UserAdd {...props} users={users}></UserAdd>
                        }} path="/add"/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;