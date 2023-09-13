import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import api from '../../api/axiosConfig';

const RegisterPage = () => {

    const uid = function(){
        return Math.floor(Math.random());
    }
    const [userID, setUserID] = useState(uid());
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await api.post("api/v1/users/save",
            {userID:userID, username:username, email:email, password:password});
            setUserID(uid())
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <Form>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp"
                    onChange={e => setUsername(e.target.value)}/>
                <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
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
            <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
        </Form>
     )
}

export default RegisterPage
