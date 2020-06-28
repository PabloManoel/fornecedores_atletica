import React from 'react';

function FilterSearch() {
	return (
		<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			<div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingOne">
					<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
						aria-expanded="true" aria-controls="collapseOne">
						<h4 className="panel-title">
							<span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Adicionar Filtros
							</h4>
					</a>
				</div>
				<div id="collapseOne" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
					<div className="panel-body">

						<form>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Palavra-chave</label>
								<input type="text" className="form-control" id="exampleInputPassword1"
									placeholder="Insira a palavra-chave" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Código do Produto</label>
								<input type="text" className="form-control" id="exampleInputPassword1"
									placeholder="Nome do Fornecedor" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Fornecedor</label>
								<input type="text" className="form-control" id="exampleInputPassword1"
									placeholder="Código do Produto" />
							</div>

							{/* <!-- faixa de preço --> */}
							<div className="form-group">
								<label htmlFor="example1">Faixa de preço</label>
								<input type="range" className="form-control" id="example1" min="0" max="10000" />
							</div>

							{/* <!-- avaliacao e UF--> */}
							<div className="row">
								<div className="col-xs-6">
									<div className="form-group avaliacao-estrela-descricao">
										<label>Avaliação</label>
									</div>
								</div>
								<div className="col-xs-6">
									<div className="form-group avaliacao-estrela-descricao">
										<label>UF</label>
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
										<select name="SP">
											<option value="RJ">Sao Paulo</option>
											<option value="RJ">Rio de Janeiro</option>
											<option value="BH">Belo Horizonte</option>
											<option value="SC">Santa Catarina</option>
										</select>
									</div>
								</div>
							</div>
							<input type="submit" className="btn btn-lg btn-block" value="Filtrar" />
						</form>
					</div>
				</div>
			</div>
		</div>
	)

}
export default FilterSearch;