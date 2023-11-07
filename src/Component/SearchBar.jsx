import React, { useEffect, useState } from "react";
import MovieList from "./MoviesList";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultSubmit,setResultSubmit] = useState('');
  const [page,setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    if(searchTerm == ''){
      fetch(`http://www.omdbapi.com/?apikey=1eea6028&&s=movie&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          setMovies(data.Search)
      });
    }else{
      console.log(resultSubmit)
      fetch(`http://www.omdbapi.com/?apikey=1eea6028&s=${resultSubmit}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          setMovies(data.Search)
      });
    }
  
  },[page,resultSubmit,searchTerm])

  function getTheMoive(e){
    e.preventDefault();
    setResultSubmit(searchTerm);
  }

  return (
    <div >
      <form action="" onSubmit={(e)=>getTheMoive(e)}>
        <input
          type="text"
     
          style={{padding:'12px 15% 12px 20px',background:'rgb(178,167,65)',border:'none',margin:'10px',color:'blue'}}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value='search' style={{color:'white',background:'rgb(255,202,0)',border:'none',padding:'12px 3%',cursor:'pointer'}}/>
      </form>
      <MovieList movies={movies} /> 
      <button onClick={()=>setPage(page-1)}>Pre</button><span style={{padding:'0px 10px'}}>{page}</span><button onClick={()=>setPage(page+1)}>Next </button>
    </div>
  );
}

export default SearchBar;
