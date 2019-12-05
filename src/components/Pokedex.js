import React from "react";
import { Loader } from "./Loader";
import { SearchForm } from "./SearchForm";
import { CardResult } from "./CardResult";
import { getPokemonList } from "../utils/api";
import { getPokemonListByName } from "../utils/api";

const SEARCH_NG = {
		next: null,
		previous: null,
		results: null,
		error: true,
		isLoading: false
	},
	SEARCH_INIT = {
		next: null,
		previous: null,
		results: null,
		error: false,
		isLoading: true
	};

export class Pokedex extends React.Component {
	state = SEARCH_INIT;
	componentDidMount() {
		return getPokemonList()
			.then(data => {
				this.setState({
					next: data.next,
					previous: data.previous,
					results: data.results,
					error: false,
					isLoading: false
				});
			})
			.catch(error => {
				this.setState(SEARCH_NG);
			});
	}
	onSearch = name => {
		this.setState({ isLoading: true });
		return getPokemonListByName(name)
			.then(data => {
				this.setState({
					next: data.next,
					previous: data.previous,
					results: data.results,
					error: false,
					isLoading: false
				});
			})
			.catch(error => {
				this.setState(SEARCH_NG);
			});
	};
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
				<SearchForm onSearch={this.onSearch} />
				{this.state.isLoading && <Loader />}
				{!this.state.isLoading && !this.state.error && (
					<CardResult data={this.state.results} />
				)}
				{!this.state.isLoading && this.state.error && (
					<h3 className="center">Error while communicating with API!</h3>
				)}
			</div>
		);
	}
}
