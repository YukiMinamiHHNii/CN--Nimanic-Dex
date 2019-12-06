import React from "react";

export class CardResult extends React.Component {
	render() {
		let output =
			this.props.data === null
				? notFound()
				: resultList(this.props.data, this.props.onSelect);
		return <section className="row">{output}</section>;
	}
}

const notFound = () => {
	return <h3 className="center">No results found!</h3>;
};

const resultList = (data, onSelect) => {
	return data.map(item => {
		return (
			<article className="col s12 m4 l3" key={item.name}>
				<div
					className="center card modal-trigger"
					data-target="pokeData"
					onClick={() => onSelect(item.name)}
				>
					<img src={item.sprite} alt={item.name} className="card-img" />
					<p className="center card-name">{item.name}</p>
				</div>
			</article>
		);
	});
};
