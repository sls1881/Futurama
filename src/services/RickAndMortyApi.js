//Get all episodes
export const getEpisodes = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/episode');

  const { results } = await res.json();

  return results.map(({ id, name, air_date, characters, url }) => ({
    id,
    name,
    date: air_date,
    characters,
    image: url,
  }));
};

//Get episode by ID
