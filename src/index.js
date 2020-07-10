import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import ListItems from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact={true} path='/' component={ListItems} />
        <Route exact={true} path='/products' component={ListItems} />
        <Route path='/products/:id' component={ProductDetails} />

      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
