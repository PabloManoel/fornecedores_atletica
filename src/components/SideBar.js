import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListItems from "./ProductsList";

function SideBar() {

	return (
		<header>
			<Router>
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button id="menu-toggle" type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#id_colapse_navbar" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to={"/products"} className="navbar-brand " href="index.html">Clube das Lojinhas</Link>
					</div>
				</div>
			</nav>

			<Switch>
				<Route exact path={"/products"} component={ListItems}></Route>
			</Switch>
			</Router>
		</header>
	)

}

export default SideBar