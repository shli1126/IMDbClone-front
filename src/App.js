import './App.css';
import axios from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from "./components/auth/LoginPage";
import WatchListPage from "./components/watchList/WatchListPage";

function App() {

const [movies, setMovies] = useState([]);
const [movie, setMovie] = useState();
const [reviews, setReviews] = useState();


const getMovies = async () => {
  try {
    const response = await axios.get("/api/v1/movies");
    //console.log(response.data);
    setMovies(response.data);

  } catch (err) {
    console.log(err);
  }
}

const getMovieData = async (movieId) => {
  try{
    const response  = await axios.get(`/api/v1/movies/${movieId}`);
    const singleMovie = response.data;

    setMovie(singleMovie);

    //setReviews(singleMovie.reviews);
    setReviews(singleMovie.reviewIds);

  } catch (err) {
    console.log(err)
  }
}

useEffect(() => {
  getMovies();
}, []);


  return (

    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home movies={movies} />} ></Route>
                <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
                <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
                <Route path="/Register" element={<RegisterPage/>}></Route>
                <Route path="/Login" element={<LoginPage/>}></Route>
                <Route path="/WatchList/:username" element={<WatchListPage/>}></Route>
            </Route>
        </Routes>
    </div>

  );
}

export default App;
