import React from "react";

export class CardResult extends React.Component {
	render() {
		return (
			<section className="row">
				{this.props.data.map(item => {
					return (
						<article className="col s4 m3" key={item.name}>
							<div className="center card">
								<img src={item.sprite} alt={item.name} className="card-img"/>
								<p className="center card-name">{item.name}</p>
							</div>
						</article>
					);
				})}
			</section>
		);
	}
}
