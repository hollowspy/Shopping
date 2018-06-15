import React from "react";

const ShoppingList = props => (
	<div>
		<h1>Shopping List</h1>
		<ol>
			{props.articles.map(article => (
				<li key={article.id}>
					<p>
						nom : {article.nom} | stock :
						{article.stock} | prix: {article.prix}
					</p>
					{article.stock !== 0 && (
						<button onClick={() => props.addArticle(article)}>
							Ajouter
						</button>
					)}
				</li>
			))}
		</ol>
	</div>
);

export default ShoppingList;
