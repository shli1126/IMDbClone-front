import React, {useEffect, useState} from 'react'
import {Form, Row} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import {useNavigate, useParams} from "react-router-dom";
import {colors} from "@mui/material";
import UserWatchList from "../userWatchList/UserWatchList";

const WatchListPage = () => {

    const [email, setEmail] = useState("");
    const [imdbId, setImdbId] = useState("");
    const [movies, setMovies] = useState([]);
    let param = useParams()
    const username = param.username;
    const getUser = async () => {

        try {
            const response = await api.get(`/api/v1/users/watchlist/${username}`);
            console.log(response.data);
            setMovies(response.data);
        } catch(err) {
            console.log(err)
        }
    }
    const handleSubmit = async (e) => {

    }

    useEffect(() => {
        getUser()
    }, []);

    return (

        <div>
            <Form>
                <div>
                    <h1>Add movie WatchList</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputimdbId" className="form-label">imdbId</label>
                    <input type="imdbId" className="form-control" id="exampleInputimdbId1" aria-describedby="imdbIdHelp"
                        onChange={e => setImdbId(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
            </Form>
            <UserWatchList movies={movies}></UserWatchList>
        </div>
    )
}

export default WatchListPage;
