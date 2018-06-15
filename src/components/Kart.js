import React from "react";

const Kart = props => (
	<div>
		<h1>My Kart : </h1>
		<p>Nombre article :{props.numberTotal}</p>
		<p>Total : {props.total}$</p>
		<ul>
			{props.kart.length !== 0 &&
				props.kart.map(
					article =>
						article.qte !== 0 && (
							<li key={article.nom}>
								{article.nom} | {article.qte} | {article.prix} |
								Total :
								{article.qte * article.prix}$
								<button
									onClick={() => props.removeArticle(article)}
								>
									retirer
								</button>
							</li>
						)
				)}
		</ul>
		{props.kart.length !== 0 && (
			<button onClick={() => props.clearKart()}>Vider le panier</button>
		)}
	</div>
);

export default Kart;
