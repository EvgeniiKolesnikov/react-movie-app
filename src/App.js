import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movies';

// For componentDidMount
// useEffect(() => {
//   // Your code here
// }, []);

// For componentDidUpdate
// useEffect(() => {
//   // Your code here
// }, [yourDependency]);

// For componentWillUnmount
// useEffect(() => {
//   // componentWillUnmount
//   return () => {
//      // Your code here
//   }
// }, [yourDependency]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  console.log('render');

  async function getMovies() {
    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    // console.log(movies);
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(() => {
    console.log('componentDidMount');
    getMovies();
  }, []);

  return (
    <div className='App'>
      {isLoading
        ? 'Loading...'
        : movies.map((movie) => {
            console.log(movie);
            return (
              <Movie
                // key={movie.id}
                // id={movie.id}
                // title={movie.title}
                // year={movie.year}
                // summary={movie.summary}
                // poster={movie.medium_cover_image}
                {...movie}
                key={movie.id}
                poster={movie.medium_cover_image}
              />
            );
          })}
    </div>
  );
}

export default App;
