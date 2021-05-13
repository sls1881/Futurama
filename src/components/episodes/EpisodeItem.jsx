import React from 'react';
import PropTypes from 'prop-types';

function EpisodeItem({ name, date, characters, link }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <a href={link}>
        <p>{link}</p>
      </a>
      <ul>
        <li>{characters}</li>
      </ul>
    </div>
  );
}

EpisodeItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default EpisodeItem;
