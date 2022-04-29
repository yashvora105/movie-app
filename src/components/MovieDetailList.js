import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

const MovieDetailList = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [moviesDetail, setMoviesDetail] = useState(null);

  const getMovieDetailRequest = async () => {
    const url = `http://api.themoviedb.org/3/movie/${location.state.id}?api_key=${process.env.REACT_APP_PUBLIC_API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log("Movie Details: ", responseJson);
    if (responseJson) {
      setMoviesDetail(responseJson);
    }
  };

  useEffect(() => {
    getMovieDetailRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatDate(date) {
    var d = new Date(date),
      year = d.getFullYear();

    return year;
  }

  const mystyle = {
    backgroundColor: "beige",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      {moviesDetail && (
        <>
          <div>
            <Header name={"Movie Details"} arrowimage={true} onClick={() => navigate(-1)} />
            <div style={mystyle}>{moviesDetail.title}</div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2 col-md-4">
                  <img
                    src={
                      process.env.REACT_APP_PUBLIC_IMG_ENDPOINT +
                      moviesDetail.poster_path
                    }
                    alt="movie"
                    className="img-fluid w-100 h-100 py-2"
                  />
                </div>
                <div className="col py-2">
                  <h3>{formatDate(moviesDetail.release_date)}</h3>
                  <i>{moviesDetail.runtime} mins</i>
                  <br />
                  <br />
                  <h5>{moviesDetail.vote_average}/10</h5>
                  <br />
                  <i>{moviesDetail.overview}</i>
                  <br />
                  <br />
                  <button
                    onClick={() => {
                      alert("Added to favourite");
                    }}
                  >
                    Add to Favourite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailList;
