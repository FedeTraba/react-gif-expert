export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/channels/search?api_key=2POHUDdLRMKGseUzT9VzGl6cKa5AReNa&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img => ({
        id: img.featured_gif?.id ,
        title: img.featured_gif?.title,
        url: img.featured_gif?.images?.downsized?.url 
    }));
    return gifs;
}
