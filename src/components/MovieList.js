import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const MovieList = () => {
  let navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_PUBLIC_API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header name={"Pop Movies"}/>

      <div class="container-fluid">
        <div class="row">
          {movies.map((movie, index) => (
            <div class="col-6 col-lg-3 py-3">
              <img
                key={index}
                className="img-fluid h-100 w-100"
                src={
                  process.env.REACT_APP_PUBLIC_IMG_ENDPOINT + movie.poster_path
                }
                alt="movie"
                onClick={() => {
                  navigate(`/detail/${movie.id}`, {
                    state: movie,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MovieList;
