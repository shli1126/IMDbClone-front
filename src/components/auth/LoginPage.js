import React, { useState } from 'react'
import {Form, Row} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import {useNavigate} from "react-router-dom";
import {colors} from "@mui/material";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('api/v1/users/login', {
                email: email,
                password: password
            });
            if (response.data.status) {
                setLoginMessage(response.data.message);
                navigate('/')
            }
            else {
                setLoginMessage(response.data.message);
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <Form>
            <div>
                <h1>Login</h1>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={e => setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <h5 style={{ color: 'red' }}>{loginMessage}</h5>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

        </Form>
    )
}

export default LoginPage
