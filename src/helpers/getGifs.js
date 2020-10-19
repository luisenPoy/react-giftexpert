export const getGifts = async (category) => {
  // encodeURI -> para quitar espacios
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=3givnG33wyI7m4BtLxcKnW4yVE4457WV`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, // ? -> por si no trae imagenes
    };
  });

  return gifts;
};
