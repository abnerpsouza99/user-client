import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const style = {
    textAlign: "center"
}

const UsersForm = (props) => {
    const [user, setUser] = useState({
        username: props.user ? props.user.username : '',
        uuid: props.user ? props.user.uuid : '',
        age: props.user ? props.user.age : '',
        createdAt: props.user ? props.user.createdAt : '',
        updatedAt: props.user ? props.user.updatedAt : '',
    });
    const { username, age, createdAt, updatedAt, uuid} = user;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch(name){
            case 'username':
                setUser((prevState) => ({
                    ...prevState,
                    username: value
                }));
            case 'age':
                setUser((prevState) => ({
                    ...prevState,
                    age: value
                }));
        }
        
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const user = {
            age: age,
            username: username
        }
        console.log(user)
        await props.handleOnSubmit(user);
    }
    
    return (
        <div style={style}>
            <h2>Add User</h2>
            <Form onSubmit={onSubmit} className="user-form">
                <Form.Group controlId="name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter name of User"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="age"
                        value={age}
                        placeholder="Enter age of User"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default UsersForm;