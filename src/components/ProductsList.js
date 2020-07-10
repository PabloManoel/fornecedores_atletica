import React, { Component, Fragment } from 'react';
import ProductListItem from './ProductListItem';
import FilterSearch from './FilterSearch';
import Header from './Header';

class ProductsList extends Component {

	constructor(props) {
		super(props);
		this.list =
			[
				{
					id: 1,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/bandana-modelo.jpg',
					name: 'Bandana Modelo',
					vendor: 'Unica uniformes',
					price: 35.00,
					deliveryTime: 15
				},
				{
					id: 2,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/samba-fem.jpg',
					name: 'Samba feminino',
					vendor: 'SambaFem vendor',
					price: 40.00,
					deliveryTime: 15
				},
				{
					id: 3,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/caneca-cone.jpg',
					name: 'Caneca cone',
					vendor: 'CaneCone vendor',
					price: 50.00,
					deliveryTime: 15
				},
				{
					id: 1,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/bandana-modelo.jpg',
					name: 'Bandana Modelo',
					vendor: 'Unica uniformes',
					price: 35.00,
					deliveryTime: 15
				},
				{
					id: 2,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/samba-fem.jpg',
					name: 'Samba feminino',
					vendor: 'SambaFem vendor',
					price: 40.00,
					deliveryTime: 15
				},
				{
					id: 3,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/caneca-cone.jpg',
					name: 'Caneca cone',
					vendor: 'CaneCone vendor',
					price: 50.00,
					deliveryTime: 15
				}, {
					id: 1,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/bandana-modelo.jpg',
					name: 'Bandana Modelo',
					vendor: 'Unica uniformes',
					price: 35.00,
					deliveryTime: 15
				},
				{
					id: 2,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/samba-fem.jpg',
					name: 'Samba feminino',
					vendor: 'SambaFem vendor',
					price: 40.00,
					deliveryTime: 15
				},
				{
					id: 3,
					image: 'https://fornecedores-atletica.s3.amazonaws.com/Project/product-images/caneca-cone.jpg',
					name: 'Caneca cone',
					vendor: 'CaneCone vendor',
					price: 50.00,
					deliveryTime: 15
				}
			]
	}

	render() {

		let ListItems = this.list.map(item => <ProductListItem data={item} key={item.id} />);

		return (
			<Fragment>
				<Header />
				<div className="container">
					<FilterSearch></FilterSearch>
				</div>
				<div className="mainList">
					{ListItems}
				</div>
			</Fragment>
		)
	}
}

export default ProductsList;