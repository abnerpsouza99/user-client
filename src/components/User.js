import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import '../App.css';
import { useHistory } from 'react-router-dom';

const BASE_URL = "http://localhost:3030/users";

const User = ({
    uuid,
    username,
    age,
    createdAt,
    updatedAt
}) => {

    const history = useHistory();

    const handleRemoveUser = async (userUuid) =>{
        console.log(userUuid)
        await axios.delete(BASE_URL + "/" + userUuid).then((response) => {
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        });
    }

    const formatDate = (date) =>{
        const dateObject = new Date(date);
        return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()} - ${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`
    }

    return (
        <Card style={{width: '18rem', marginTop: '20px'}} className="user">
            <Card.Body>
                <Card.Title className="user-name">{username}</Card.Title>
                <div className="user-details">
                    <div>Age: {age}</div>
                    <div>Created at: {formatDate(createdAt)}</div>
                    <div>Updated at: {formatDate(updatedAt)}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${uuid}`)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveUser(uuid)}>Delete</Button>
            </Card.Body>
        </Card>    
    )
}
export default User;