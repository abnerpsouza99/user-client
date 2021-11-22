import React, { useEffect, useState } from "react";
import User from "../components/User";
import _ from 'lodash';
import axios from 'axios';
import { prettyDOM } from "@testing-library/react";

const BASE_URL = "http://localhost:3030/users"

const style = {
    textAlign: "center",
    margin: "20px 200px"
}

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async getUsers() {
        await axios.get(BASE_URL + "/all", {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control': '*'
            }
        }).then((response) => {
            this.setState({
                users: Array.from(response.data)
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {

        const { users } = this.state;

        return (
            <div style={style}>
                {users.length > 0 ? (
                    users.map((user) => {
                        return <User key={user.uuid} {...user}></User>
                    })
                ) : (
                    <p className="message">No users available. Please, add some user!</p>
                )}
            </div>
        )
    }
}
export default UsersList;