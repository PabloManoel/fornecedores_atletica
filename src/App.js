import React from 'react';
import './App.css';
import FilterSearch from './components/FilterSearch';
import ListItems from "./components/ProductsList";
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <FilterSearch></FilterSearch>
      <ListItems></ListItems>
      
    </div>
  );
}

export default App;
