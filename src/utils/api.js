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
