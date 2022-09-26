export	const  getGifs = async( category ) =>{

	const offset = Math.floor(Math.random() * 150);
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&offset=${offset}&api_key=vRpDaFyHYPxEB7LL232B8abh39ju0uKg`;
	const resp = await fetch( url );
	const { data } = await resp.json();

	const gifs = data.map( img => {
		return{
			id: img.id,
			title: img.title,
			url: img.images?.original.url
		}
	});

	return gifs;

}