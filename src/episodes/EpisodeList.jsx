import React from 'react';
import PropTypes from 'prop-types';
import EpisodeItem from './EpisodeItem';

function EpisodeList({ episodes }) {
  return (
    <ul aria-label="episodes">
      {episodes.map((episode) => {
        <li>
          <EpisodeItem
            name={name}
            date={date}
            characters={characters}
            image={image}
          />
        </li>;
      })}
    </ul>
  );
}

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      characters: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default EpisodeList;
