import React from 'react';

function Header() {

	return (
		<header>
			<nav className="navbar navbar-default">
				<div className="container">
					<a href="/products" className="navbar-brand">Clube das Lojinhas</a>
					
					<div className="navbar-header">
						<button id="menu-toggle" type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#id_colapse_navbar" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header