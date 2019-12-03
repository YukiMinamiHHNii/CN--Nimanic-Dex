import React from "react";

export class SearchForm extends React.Component {
	render() {
		return (
			<form className="row">
				<div class="input-field  col s12 m12 l4">
					<label for="pokemon">Search a Pokémon:</label>
					<input name="pokemon" type="text" class="validate" />
				</div>
				<div class="input-field  col s12 m12 l4">
					<select id="pokedex-filterType" name="filterType">
						<option value="" disabled selected>
							Choose your option
						</option>
						<option value="typing">Typing</option>
						<option value="ability">Ability</option>
					</select>
					<label>Filter by:</label>
				</div>
				<div class="input-field  col s12 m12 l4">
					<select id="pokedex-filterValue">
						<option value="" disabled selected>
							Choose your option
						</option>
					</select>
					<label>Value:</label>
				</div>
			</form>
		);
	}
}
