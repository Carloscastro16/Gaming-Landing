import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/header';
import AppBanner from './components/Banner';
import NewGames from './components/NewGames';
import Categories from './components/Categories';
import NewlyGames from './components/NewlyGames';
import DataTable from './components/DataTable';
function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <AppBanner></AppBanner>
      <NewGames></NewGames>
      <NewlyGames></NewlyGames>
      <Categories></Categories>
      <DataTable></DataTable>
    </>
  );
}

export default App;
