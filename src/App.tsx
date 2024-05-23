import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/header';
import AppBanner from './components/Banner';
import NewGames from './components/NewGames';
function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <AppBanner></AppBanner>
      <NewGames></NewGames>
    </>
  );
}

export default App;
