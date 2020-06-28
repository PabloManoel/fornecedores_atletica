import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

function ProductListItem(props) {

	console.log(props);

	return (
		<div className="thumbnail"> {/* class lista-cor-intercalado */}
			<Router>
				<div className="row">
					<div className="col-sm-6">
						<img src={props.data.image} alt="..." className="img-responsive" />
					</div>
					<div className="col-sm-6">
						<div className="caption descricao-lista">
							<h3 className="text-center">{props.data.name}</h3>
							<hr />
							<form>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Fornecedor</label>
									<input onChange={consoleChange} type="text" className="form-control" id="exampleInputPassword1"
										placeholder="Nome do Fornecedor" value={props.data.vendor} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Valor Unitário</label>
									<input onChange={consoleChange} type="text" className="form-control" id="exampleInputPassword1"
										placeholder="Valor Unitário" value={props.data.price} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Tempo de entrega</label>
									<input onChange={consoleChange} type="text" className="form-control" id="exampleInputPassword1"
										placeholder="Tempo de entrega" value={props.data.deliveryTime} />
								</div>
							</form>
							<Link to={"/produts"} className="btn btn-primary btn-lg btn-block">
								<span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Detalhes
							</Link>
						</div>
					</div>
				</div>

				<Switch>
					<Route path="tutorials/:id" component={ProductDetails}/>
				</Switch>
			</Router>
		</div>
	)

}

function consoleChange(event){
	console.log("was changed");
}
export default ProductListItem;

