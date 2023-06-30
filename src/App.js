import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";
import mainIMG from "./img/main.png";
import moovTittle from "./img/moovTittle.png";

// b8ddc27f
const API_URL = "http://www.omdbapi.com/?apikey=b8ddc27f";


const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Dark");
  }, []);



  return (
    <div className="app">
      <div className="main"> 
         <img 
            className="mainIMG"
            src={mainIMG} 
            alt="search" 
         />

            <div className="searchSection">
              <img 
              className="moovTittle"
              src={moovTittle} 
              alt="search" 
              />
              <div className="search">
                <input
                  placeholder=" Search for movies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}

                />

                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => searchMovies(searchTerm)} 
                />
              </div>
            </div>
      </div>




      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
