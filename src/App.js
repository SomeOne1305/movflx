import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navigation style={{position: "fixed", top:0, left: 0}}></Navigation> */}
      <div className='container'>
        <Navigation/>
        <Header/>
        <Movies/>
      </div>
    </div>
  );
}

export default App;
