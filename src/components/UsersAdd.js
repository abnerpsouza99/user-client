import React from "react";
import UsersForm from "./UsersForm";
import axios from 'axios';

const BASE_URL = "http://localhost:3030/users";

const UserAdd = ({history, users}) => {
    const handleOnSubmit = async (user) => {
        console.log('user-payload', await user)
        await axios.post("http://localhost:3030/users/create", {
            username: String(await user.username),
            age: Number(await user.age)
        }, {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control': '*'
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
        history.push('/');
    }

    return (
        <React.Fragment>
            <UsersForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    )
}
export default UserAdd;
