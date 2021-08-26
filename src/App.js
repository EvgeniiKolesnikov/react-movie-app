import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import classes from './App.module.css';

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
    <section className={classes.container}>
      {isLoading ? (
        <div className={classes.loader}>
          <span className={classes.loader__text}>Loading...</span>
        </div>
      ) : (
        <div className='movies'>
          {movies.map (movie => (
          <Movie
            // key={movie.id}
            // id={movie.id}
            // title={movie.title}
            // year={movie.year}
            // summary={movie.summary}
            // genres={movie.genres}
            // poster={movie.medium_cover_image}
            {...movie}
            key={movie.id}
            poster={movie.medium_cover_image}
          />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
