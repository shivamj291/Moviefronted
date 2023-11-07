import React, { useState } from 'react';

import './App.css';
import MovieList from './Component/MoviesList';
import MovieDetails from './Component/MoviesDetails'
import { Route, Routes } from 'react-router-dom';
function App() {



  return (
    <div className="App">
      <h1>Movie Browsing App</h1>
      <Routes>
        <Route path = '/' element = {<MovieList/>}/>
        <Route path = '/:id' element = {<MovieDetails/>}/>
      </Routes>
   

    </div>
  );
}

export default App;
