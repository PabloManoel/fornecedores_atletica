import React from 'react';
import { Link } from 'react-router-dom';

function ProductListItem(props) {

	console.log(props);

	return (
		<div className="productListItem">
			<div className="thumbnail"> {/* class lista-cor-intercalado */}
				<a href={`/products/${props.data.id}`}>
					<img src={props.data.image} alt="..." className="img-responsive" />
				</a>

				{/* <div className="caption descricao-lista">
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
					<Link to={`/products`} className="btn btn-primary btn-lg btn-block">
						<span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Detalhes</Link>
				</div> */}
			</div>
		</div>
	)
}

function consoleChange(event) {
	console.log("was changed");
}
export default ProductListItem;

