import React from "react";
import { Loader } from "./Loader";
import { SearchForm } from "./SearchForm";
import { CardResult } from "./CardResult";
import { Modal } from "./Modal";
import { getPokemonList } from "../utils/api";
import { getPokemonListByName } from "../utils/api";

const SEARCH_NG = {
		next: null,
		previous: null,
		results: null,
		error: true,
		isLoading: false,
		selectedPoke: null
	},
	SEARCH_INIT = {
		next: null,
		previous: null,
		results: null,
		error: false,
		isLoading: true,
		selectedPoke: null
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
		return getPokemonListByName(name!==""?name:"pikachu")
			.then(data => {
				this.setState({
					next: null,
					previous: null,
					results: data.results,
					error: false,
					isLoading: false
				});
			})
			.catch(error => {
				this.setState(SEARCH_NG);
			});
	};
	onSelect = selectedPoke => {
		this.setState({ selectedPoke });
	};
	search = direction => {
		this.setState({ isLoading: true });
		return getPokemonList(
			direction === "next" ? this.state.next : this.state.previous
		)
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
					<CardResult data={this.state.results} onSelect={this.onSelect} />
				)}
				{!this.state.isLoading && this.state.error && (
					<h3 className="center">Error while communicating with API!</h3>
				)}
				<div className="row center">
					{this.state.previous !== null && (
						<a
							href="!#"
							className="waves-effect waves-light btn pagination red darken-2"
							onClick={() => this.search("prev")}
						>
							Prev
						</a>
					)}
					{this.state.next !== null && (
						<a
							href="!#"
							className="btn pagination red darken-2"
							onClick={() => this.search("next")}
						>
							Next
						</a>
					)}
				</div>
				<Modal name="pokeData" pokemon={this.state.selectedPoke} />
			</div>
		);
	}
}
