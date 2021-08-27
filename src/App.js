import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './routes/About';
import Detail from "./components/Detail";
import Home from './routes/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </HashRouter>
  );
}

export default App;
