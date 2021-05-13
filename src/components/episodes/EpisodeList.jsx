import React from 'react';
import PropTypes from 'prop-types';
import EpisodeItem from './EpisodeItem';

function EpisodeList({ episodes }) {
  return (
    <ul aria-label="episodes">
      {episodes.map((episode) => (
        <li key={episode.id}>
          <EpisodeItem
            name={episode.name}
            date={episode.date}
            characters={episode.characters}
            image={episode.image}
          />
        </li>
      ))}
    </ul>
  );
}

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      characters: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default EpisodeList;
