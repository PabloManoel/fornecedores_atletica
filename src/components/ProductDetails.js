import React, { Component, Fragment } from 'react';
import Header from './Header';

class ProductDetails extends Component {

	constructor(props) {
		super(props);

		const { match: { params } } = props;

		const list =
			[
				{
					id: 1,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/bandana-modelo.jpg',
					name: 'Bandana Modelo',
					client: 'Atletica Computacao UFSH',
					vendor: 'Unica uniformes',
					price: 35.00,
					deliveryTime: 15
				},
				{
					id: 2,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/samba-fem.jpg',
					name: 'Samba feminino',
					client: 'Atletica Computacao UFSH',
					vendor: 'SambaFem vendor',
					price: 40.00,
					deliveryTime: 15
				},
				{
					id: 3,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/caneca-cone.jpg',
					name: 'Caneca cone',
					client: 'Atletica Computacao UFSH',
					vendor: 'CaneCone vendor',
					price: 50.00,
					deliveryTime: 15
				}
			];

		this.product = list.find(listItem => listItem.id.toString() === params.id);

	}



	render() {
		return (
			<Fragment>
				<Header />

				<div className="container">
					<div className="thumbnail">
						<div className="row">
							<div className="col-xs-12">
								<figure>
									<img src={this.product.image} alt="..." className="img-responsive" />
								</figure>
							</div>
						</div>
						<br />
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

					<form className="form-group">
						<div className="form-group">
							<label for="exampleInputEmail1">Produto</label>
							<input type="text" value={this.product.name} className="form-control" id="exampleInputEmail1" placeholder="Categoria do produto" readOnly />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Cliente</label>
							<input type="text" value={this.product.client} className="form-control" id="exampleInputPassword1" placeholder="Nome do Cliente" readOnly />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Fornecedor</label>
							<input type="text" value={this.product.vendor} className="form-control" id="exampleInputPassword1" placeholder="Nome do Fornecedor" readOnly />
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Tempo de entrega</label>
							<input type="text" value={this.product.deliveryTime} className="form-control" id="exampleInputPassword1" placeholder="Tempo de entrega" readOnly />
						</div>

						<div className="form-group">
							<label for="exampleInputPassword1">Observações</label>
							<textarea className="form-control" id="exampleInputPassword1" rows="6" readOnly defaultValue="Lorem ipsum urna sodales iaculis ullamcorper vehicula malesuada class, consequat dictum nam odio velit odio integer, nullam curabitur rutrum dictum et metus eget.
								fames netus ante ad cubilia sollicitudin hendrerit feugiat mauris maecenas, lacinia phasellus tempor mi eleifend dolor maecenas senectus vehicula, vitae tortor phasellus non accumsan nostra molestie">
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

			</Fragment>
		);
	}

}

export default ProductDetails;