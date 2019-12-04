import React from "react";
import { SearchForm } from "./SearchForm";
import { CardResult } from "./CardResult";
import { getPokemonList } from "../utils/api";

export class Pokedex extends React.Component {
	state = {
		next: null,
		previous: null,
		results: null,
		error: false
	};
	componentDidMount() {
		return getPokemonList()
			.then(data => {
				this.setState({
					next: data.next,
					previous: data.previous,
					results: data.results,
					error: false
				});
			})
			.catch(error => {
				this.setState({
					next: null,
					previous: null,
					results: null,
					error: true
				});
			});
	}
	render() {
		return (
			<div>
				<div className="col s12 m12 l8 offset-l2">
					<h1 className="col s12 m12 center-align">Pokédex</h1>
					<p>
						This section has a wealth of information on all Pokémon creatures
						from the entire game series. Click a Pokémon's row to see a detailed
						page with species typing, moves, stats and more.
					</p>
				</div>
				<SearchForm />
				{this.state.results !== null && (
					<CardResult data={this.state.results} />
				)}
			</div>
		);
	}
}
