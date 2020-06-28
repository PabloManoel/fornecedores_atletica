import React from 'react';
import './App.css';
import ListItems from "./components/ProductsList";
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <ListItems></ListItems>
      
    </div>
  );
}

export default App;
