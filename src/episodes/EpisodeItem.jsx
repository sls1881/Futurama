import React from 'react';
import PropTypes from 'prop-types';

function EpisodeItem({ name, date, characters, image }) {
  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <h3>{name}</h3>
      <p>{date}</p>
      <image alt={name} src={image} />
      <ul>
        <li>{characters}</li>
      </ul>
    </div>
  );
}

EpisodeList.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};

export default EpisodeItem;
