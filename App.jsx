import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
