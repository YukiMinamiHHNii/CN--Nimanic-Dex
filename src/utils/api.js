import axios from "axios";

export const getPokemonList = (
	data = `${process.env.REACT_APP_API_ENDPOINT}/pokemon`
) => {
	return axios
		.get(data)
		.then(result => {
			return setPokemonSprite(result.data);
		})
		.catch(error => {
			return Promise.reject({ error: error });
		});
};

const setPokemonSprite = pokemonDataList => {
	return new Promise((resolve, reject) => {
		pokemonDataList.results.map((item, index) => {
			return (pokemonDataList.results[index] = {
				...item,
				sprite: `${process.env.REACT_APP_IMAGE_ENDPOINT}/${
					item.url.match(/\/([^\/]+)\/?$/)[1]
				}.png`
			});
		});

		resolve(pokemonDataList);
	});
};

export const getPokemonListByName = name => {
	return axios
		.get(`${process.env.REACT_APP_API_ENDPOINT}/pokemon/${name.toLowerCase()}`)
		.then(result => {
			return setPokemonSprite({ results: [{ ...result.data.species }] });
		})
		.catch(error => {
			return error.response.status === 404
				? { results: null }
				: Promise.reject({ error: error });
		});
};

export const getPokemonDataByName = name => {
	return axios
		.get(`${process.env.REACT_APP_API_ENDPOINT}/pokemon/${name.toLowerCase()}`)
		.then(result => {
			return {
				photo: result.data.sprites.front_default,
				dex_number: result.data.id,
				height: result.data.height,
				weight: result.data.weight,
				species: result.data.name,
				abilities: result.data.abilities,
				moves: result.data.moves.splice(0, 4),
				stats: result.data.stats
			};
		})
		.catch(error => {
			return Promise.reject({ error: error });
		});
};