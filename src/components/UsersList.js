import React, { useEffect, useState } from "react";
import User from "../components/User";
import _ from 'lodash';
import axios from 'axios';
import { prettyDOM } from "@testing-library/react";

const BASE_URL = "http://localhost:3030/users"

const style = {
    textAlign: "center",
    margin: "20px 200px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
}

const styleMessage = {
    textAlign: "center !important",
    margin: "20px 200px",
    width: "100%"
}

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    getUsers = async () => {
        console.log('getUsers')
        await axios.get(BASE_URL + "/all", {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control': '*'
            }
        }).then((response) => {
            if(response.data == 'Not exist users registered!'){
                this.setState({
                    users: []
                })
            } else {
                this.setState({
                    users: Array.from(response.data)
                })
            }
        }).catch((error) => {
            console.log('error', error)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {

        let { users } = this.state;
        const props = this.props;

        return (
            <div style={style}>
                {users.length > 0 ? (
                    users.map((user) => {
                        return <User key={user.uuid} {...props} {...user}></User>
                    })
                ) : (
                    <p className="message" style={styleMessage}>No users available. Please, add some user!</p>
                )}
            </div>
        )
    }
}
export default UsersList;