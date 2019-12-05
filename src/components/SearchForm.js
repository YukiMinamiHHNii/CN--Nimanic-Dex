import React from "react";

export class SearchForm extends React.Component {
	state = {
		pokemon: ""
	};
	onInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSearch = e => {
		e.preventDefault();
		this.props.onSearch(this.state.pokemon);
	};
	render() {
		return (
			<form className="row" onSubmit={this.onSearch}>
				<div className="input-field  col s12">
					<label htmlFor="pokemon">Search a Pokémon:</label>
					<input name="pokemon" type="text" onChange={this.onInput} />
				</div>
			</form>
		);
	}
}
