import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
//components
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const movieText = "Harry";
  //   const fetchMovies = async () => {
  //     const response = await movieApi
  //       .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
  //       .catch((err) => {
  //         console.log("Err :", err);
  //       });
  //     console.log("The response from API", response);
  //     dispatch(movieActions.addMovies(response.data));
  //   };
  //   fetchMovies();
  // }, []);
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
