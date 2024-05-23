import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/header';
import AppBanner from './components/Banner';
import NewGames from './components/NewGames';
import Categories from './components/Categories';
function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <AppBanner></AppBanner>
      <NewGames></NewGames>
      <Categories></Categories>
    </>
  );
}

export default App;
