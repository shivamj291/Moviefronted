import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchMovies();
  }, [submitSearch, page]);

  const fetchMovies = async () => {
    if (search == "") {
      try {
        const response = await axios.get(
          `https://movie-backend-6ym2.onrender.com/?apikey=60dd3a66&s=movie&page=${page}`
        );
        console.log(response.data.Search);
        setMovies(response.data.Search);
      } catch (error) {
        console.log("not done");
        console.error("Error fetching movies:", error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://movie-backend-6ym2.onrender.com/?apikey=60dd3a66&s=${submitSearch}`
        );
        console.log(response.data.Search);
        setMovies(response.data.Search);
      } catch (error) {
        console.log("not done");
        console.error("Error fetching movies:", error);
      }
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px 50px" }}
      />
      <button onClick={() => setSubmitSearch(search)} style={{padding:'10px 30px',marginLeft:'5px',background:'teal',color:'white',border:'none',cursor:'pointer'}}>search</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        {movies?.map((ele) => {
          return (
            <Link to={`/${ele.imdbID}`}>
              <div style={{ width: "300px", height: "400px" }}>
                <h4 style={{ textDecoration: "none", color: "black" }}>
                  {ele.Title}
                </h4>
                <img src={ele.Poster} alt="" height={"350px"} width={"250px"} />
              </div>
            </Link>
          );
        })}
      </div>

      {submitSearch == '' ?<div>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          style={{
            background: "teal",
            color: "white",
            border: "none",
            padding: "5px 20px",
            borderRadius: "4px",
          }}
        >
          pre
        </button>
        <span style={{ margin: "10px" }}>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          style={{
            background: "teal",
            color: "white",
            border: "none",
            padding: "5px 20px",
            borderRadius: "4px",
          }}
        >
          next
        </button>
      </div>
      :null
      }
    </div>
  );
}

export default MovieList;
