//Get all episodes
export const getEpisodes = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/episode');

  const { results } = await res.json();

  return results.map(({ id, name, air_date, characters, url }) => ({
    id,
    name,
    date: air_date,
    characters,
    link: url,
  }));
};

//Get episode by ID
export const getEpisode = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

  const episode = await res.json();

  return [
    {
      id: episode.id,
      name: episode.name,
      date: episode.air_date,
      characters: episode.characters,
      link: episode.url,
    },
  ];
};
