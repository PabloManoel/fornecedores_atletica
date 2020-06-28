import React, { Component } from 'react';

class ProductDetails extends Component {


	componentDidMount() {

	}

	render() {
		return (
			<div className="container-fluid">
				<div className="thumbnail">
					<div className="row">
						<div className="col-xs-12">
							<figure>
								<img src="https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/bandana-modelo.jpg" alt="..." className="img-responsive" />
							</figure>
						</div>
					</div>
					<div className="row">

						<div className="col-xs-6">
							<button type="button" className="btn btn-sm btn-default btn-block">
								<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>Amei</button>
						</div>

						<div className="col-xs-6">
							<button type="button" className="btn btn-sm btn-default btn-block">
								<span className="glyphicon glyphicon-share" aria-hidden="true"></span>Compartilhar</button>
						</div>
					</div>
				</div>

				<h3 className="text-center">Bandana Modelo</h3>
				<form className="form-group">
					<div className="form-group">
						<label for="exampleInputEmail1">Produto</label>
						<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Categoria do produto" readonly />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Código do produto</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Código do produto" readonly />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Fornecedor</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nome do Fornecedor" readonly />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Cliente</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nome do Cliente" readonly />
					</div>
					<div className="row">
						<div className="col-xs-6">
							<div className="form-group">
								<label for="exampleInputPassword1">Valor Unitário</label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Valor Unitário" readonly />
							</div>
						</div>
						<div className="col-xs-6">
							<div className="form-group">
								<label for="exampleInputPassword1">Quantidade</label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Valor Unitário" readonly />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<div className="form-group">
								<label for="exampleInputPassword1">Frete</label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Valor do frete" readonly />
							</div>
						</div>
						<div className="col-xs-6">
							<div className="form-group">
								<label for="exampleInputPassword1">UF</label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="UF" readonly />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Total</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Custo total da venda" readonly />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Tempo de entrega</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Tempo de entrega" readonly />
					</div>

					<div className="form-group">
						<label for="exampleInputPassword1">Observações</label>
						<textarea className="form-control" id="exampleInputPassword1" rows="6" readonly>Lorem ipsum urna sodales iaculis ullamcorper vehicula malesuada class, consequat dictum nam odio velit odio integer, nullam curabitur rutrum dictum et metus eget.
							fames netus ante ad cubilia sollicitudin hendrerit feugiat mauris maecenas, lacinia phasellus tempor mi eleifend dolor maecenas senectus vehicula, vitae tortor phasellus non accumsan nostra molestie
            </textarea>
					</div>

					<div className="row">
						<div className="col-xs-6">
							<div className="form-group avaliacao-estrela-descricao">
								<label>Nota Produto</label>
							</div>
						</div>
						<div className="col-xs-6">
							<div className="form-group avaliacao-estrela-descricao">
								<label>Nota Atendimento</label>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-6">
							<div className="form-group">
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela"></span>
								<span className="fa fa-star avaliacao-estrela"></span>
							</div>
						</div>
						<div className="col-xs-6">
							<div className="form-group">
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
								<span className="fa fa-star avaliacao-estrela checked"></span>
							</div>
						</div>
					</div>
				</form>

				<button type="button" className="btn btn-default btn-lg btn-block btn-padrao">
					<span className="glyphicon glyphicon-user" aria-hidden="true"></span>Contatar Fornecedor</button>
				<br />
			</div>
		);
	}

}

export default ProductDetails;