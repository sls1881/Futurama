import React from 'react';
import PropTypes from 'prop-types';

function Controls({ episodeNumber, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="episode-number">
          Episode Search
          <input
            id="episode-number"
            type="search"
            value={episodeNumber}
            onChange={onChange}
          />
          <button aria-label="episode-search">Search</button>
        </label>
      </form>
    </div>
  );
}

Controls.propTypes = {
  episodeNumber: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
