import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ListItems from "./components/ProductsList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListItems} />
        <Route exact path="/products" component={ListItems} />
        <Route path="/products/:id" component={SideBar} />
      </Switch>

    </div>
  );
}

export default App;
