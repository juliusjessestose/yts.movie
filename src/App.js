import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./Search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=5d0da8b";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) =>  {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movie List</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// export default function Navbar() {
//     return(
//         <nav className="nav">
//             <a href="/" className="site-title">
//                 Site Name
//             </a>
//             <ul>
//                 <li>
//                     <a href="/pricing">Pricing</a>
//                 </li>
//                 <li>
//                     <a href="about">About</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }