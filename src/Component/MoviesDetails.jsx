import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails({ movie }) {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState("avengers");
  const id = useParams().id;
  useEffect(() => {
    fetchMovies();
  }, [search]);

  const fetchMovies = async () => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://movie-backend-6ym2.onrender.com/?apikey=60dd3a66&i=${id}`
      );
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log("not done");
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div style={{display:'flex',gap:'40px',padding:'50px'}}>
      <img src={movies.Poster} alt="" width={'300px'} height={'400px'} />
      <div style={{textAlign:'left'}}>
        <h2>{movies.Title}</h2>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Actors: </span>{movies.Actors}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Awards: </span>{movies.Awards}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Box office collection: </span>{movies.BoxOffice}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Year: </span> {movies.Year}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Director: </span> {movies.Director}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Genre: </span>{movies.Genre}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Language: </span>{movies.Language}</p>
        <p><span style={{fontWeight:'bold',fontSize:'20px'}}>Metascore: </span>{movies.Metascore}</p>
        <Link to='/'><button style={{padding:'10px 30px',color:'white',background:'teal',border:'none'}}>Go Back</button></Link>

      </div>
    </div>
  );
}

export default MovieDetails;
