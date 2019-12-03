import React from "react";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Footer } from "./components/Footer";

function App() {
	return (
		<main>
			<Navbar />
			<section id="contents" className="container">
				<Pokedex />
			</section>
			<Footer />
		</main>
	);
}

export default App;
