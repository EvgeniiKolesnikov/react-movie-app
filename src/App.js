import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

  useEffect(() => {
    console.log('componentDidMount');
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div className='App'>{isLoading ? 'Loading...' : 'Loaded...'}</div>;
}

export default App;
