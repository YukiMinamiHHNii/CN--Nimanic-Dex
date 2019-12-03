import React from "react";
import { SearchForm } from "./SearchForm";
import { TableResult } from "./TableResult";

export class Pokedex extends React.Component {
	render() {
		return (
			<div>
				<div class="col s12 m12 l8 offset-l2">
					<h1 class="col s12 m12 center-align">Pokédex</h1>
					<p>
						This section has a wealth of information on all Pokémon creatures
						from the entire game series. Click a Pokémon's row to see a detailed
						page with species typing, moves, stats and more.
					</p>
				</div>
				<SearchForm />
				<TableResult />
			</div>
		);
	}
}
