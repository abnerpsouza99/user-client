import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import UsersForm from "./UsersForm";
import { useHistory } from 'react-router-dom';

const BASE_URL = "http://localhost:3030/users";

const UserEdit = ({users}) => {
    const {userUuid} = useParams();
    const userToEdit = users.find((user) => user.uuid === userUuid)
    const history = useHistory();

    const handleOnSubmit = async (user) => {
        await axios.put(BASE_URL, {
            'uuid': String(await user.uuid),
            'age': Number(await user.age),
            'username': String(await user.username),
        }, {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control': '*',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            history.push('/');
        }).catch((error) => {
            console.log('error', error)
            console.log('error.message', error.message)
        })
    }

    return (
        <div>
            <UsersForm user={userToEdit} editUser={true} handleOnSubmit={handleOnSubmit}></UsersForm>
        </div>
    )
}
export default UserEdit;