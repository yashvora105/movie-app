import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailList from "./components/MovieDetailList";
import React from "react";

function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <React.StrictMode>
            <Router>
              <Routes>
                <Route exact path="/" element={<MovieList />} />
                <Route path="/detail/:id" element={<MovieDetailList />} />
              </Routes>
            </Router>
        </React.StrictMode>
      </div>
    </div>
  );
}

export default App;
