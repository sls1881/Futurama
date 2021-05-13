//Get all episodes
const getEpisodes = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/episode');

  const { results } = res.json();

  return results.map(({ id, name, air_date, characters, url }) => {
    id: id;
    name: name;
    date: air_date;
    characters: characters;
    image: url;
  });
};

//Get episode by ID

module.export = {
  getEpisodes,
};
