import React from "react";

export const TableResult = () => {
	return (
		<section className="row table-container">
		<table class="col s12 highlight centered">
				<thead>
					<tr>
						<th>Number</th>
						<th>Pokémon</th>
						<th>Name</th>
						<th>Typing</th>
						<th>Abilities</th>
						<th>HP</th>
						<th>Attack</th>
						<th>Defense</th>
						<th>Sp.Atk</th>
						<th>Sp.Def</th>
						<th>Speed</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1-0</td>
						<td>
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto"/>
						</td>
						<td>Bulbasaur</td>
						<td>Grass/Poison</td>
						<td>Overgrowth/Chlorophyll</td>
						<td>45</td>
						<td>49</td>
						<td>49</td>
						<td>65</td>
						<td>65</td>
						<td>45</td>
						<td>318</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};
