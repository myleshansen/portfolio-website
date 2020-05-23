import React from 'react';

import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <Header/>
      </header>
      <div className='Main'>
        <Landing/>
      </div>
      
      <footer className='Footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
