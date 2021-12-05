export const getImages = async (word) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=15&api_key=9TEuvIzRSXTbDZ4eo6qnh0At5FTpKspK`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const imgs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		};
	});

	return imgs;
};
