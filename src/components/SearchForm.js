import React from "react";

export class SearchForm extends React.Component {
	render() {
		return (
			<form className="row">
				<div className="input-field  col s12 m12 l4">
					<label htmlFor="pokemon">Search a Pokémon:</label>
					<input name="pokemon" type="text" className="validate" />
				</div>
				<div className="input-field  col s12 m12 l4">
					<select id="pokedex-filterType" name="filterType">
						<option defaultValue="" disabled >
							Choose your option
						</option>
						<option value="typing">Typing</option>
						<option value="ability">Ability</option>
					</select>
					<label>Filter by:</label>
				</div>
				<div className="input-field  col s12 m12 l4">
					<select id="pokedex-filterValue">
						<option defaultValue="" disabled >
							Choose your option
						</option>
					</select>
					<label>Value:</label>
				</div>
			</form>
		);
	}
}
