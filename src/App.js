import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Navigation/> */}
        <Header/>
        <Movies/>
    </div>
  );
}

export default App;
