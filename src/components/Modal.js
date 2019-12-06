import React from "react";
import M from "materialize-css";
import { Loader } from "./Loader";
import { getPokemonDataByName } from "../utils/api";

export class Modal extends React.Component {
	state = {
		result: null,
		error: null,
		isLoading: true
	};
	componentDidMount() {
		M.AutoInit();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.pokemon !== this.props.pokemon) {
			return getPokemonDataByName(this.props.pokemon)
				.then(data => {
					console.log(data);
					this.setState({
						result: data,
						error: false,
						isLoading: false
					});
				})
				.catch(error => {
					this.setState({ result: null, error: error, isLoading: false });
				});
		}
	}
	render() {
		return (
			<div id={this.props.name} className="modal">
				<div className="modal-content">
					{this.state.isLoading && <Loader />}
					{!this.state.isLoading && !this.state.error && (
						<div>
							<h4>{this.state.result.species}</h4>
							<div className="row">
								<div className="poke-img col s6 center">
									<img
										src={this.state.result.photo}
										alt={this.state.result.species}
									/>
								</div>
								<div className="poke-data col s6">
									<ul>
										<li>Dex number: {this.state.result.dex_number}</li>
										<li>Weight: {this.state.result.weight}</li>
										<li>Height: {this.state.result.height}</li>
										<li>
											Abilities:{" "}
											<ul>
												{this.state.result.abilities.map(item => (
													<li key={item.ability.name}>{item.ability.name}</li>
												))}
											</ul>
										</li>
										<li>
											Moves:{" "}
											<ul>
												{this.state.result.moves.map(item => (
													<li key={item.move.name}>{item.move.name}</li>
												))}
											</ul>
										</li>
										<li>
											Stats:{" "}
											{this.state.result.stats.map(item => (
												<li>{`${item.stat.name}: ${item.base_stat}`}</li>
											))}
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="modal-footer red darken-2">
					<a href="#!" className="modal-close btn-flat" onClick={this.onClose}>
						Close
					</a>
				</div>
			</div>
		);
	}
}
