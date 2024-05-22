import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/header';
import AppBanner from './components/Banner';
function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar></ResponsiveAppBar>
      <AppBanner></AppBanner>
    </React.Fragment>
  );
}

export default App;
