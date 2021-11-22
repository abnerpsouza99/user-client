import React from "react";
import { Button, Card } from "react-bootstrap";
import '../App.css';

const User = ({
    uuid,
    username,
    age,
    createdAt,
    updatedAt
}) => {
    return (
        <Card style={{width: '18rem'}} className="user">
            <Card.Body>
                <Card.Title className="user-name">{username}</Card.Title>
                <div className="user-details">
                    <div>Age: {age}</div>
                    <div>Created at: {new Date(createdAt).toLocaleDateString()}</div>
                    <div>Updated at: {new Date(updatedAt).toLocaleDateString()}</div>
                </div>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>    
    )
}
export default User;