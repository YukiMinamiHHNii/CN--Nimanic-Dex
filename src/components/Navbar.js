import React from "react";
import M from "materialize-css";

export class Navbar extends React.Component {
	componentDidMount() {
		M.AutoInit();
	}
	render() {
		return (
			<header className="navbar">
				<nav className="red darken-2">
					<div class="nav-wrapper container">
						<span class="brand-logo">NimanicDex</span>
						<a href="#!" data-target="side-menu" class="sidenav-trigger right">
							<i class="material-icons">menu</i>
						</a>
						<ul class="right hide-on-med-and-down">
							<li>
								<a href="https://github.com/YukiMinamiHHNii/CN--Nimanic-Dex">
									Github
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<ul class="sidenav red darken-2" id="side-menu">
					<li>
						<a href="https://github.com/YukiMinamiHHNii/CN--Nimanic-Dex">
							Github
						</a>
					</li>
				</ul>
			</header>
		);
	}
}
