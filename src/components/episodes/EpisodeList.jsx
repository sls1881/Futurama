import React from 'react';
import PropTypes from 'prop-types';
import EpisodeItem from './EpisodeItem';

function EpisodeList({ episodes }) {
  return (
    <ul aria-label="episodes">
      {episodes.map(({ id, name, date, characters, link }) => (
        <li key={id}>
          <EpisodeItem
            name={name}
            date={date}
            characters={characters}
            link={link}
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
      link: PropTypes.string.isRequired,
      characters: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default EpisodeList;
