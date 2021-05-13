import React from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
  return (
    <div>
      <form>
        <label>
          Episode Search
          <input type="search" value="episode" />
          <button>Search</button>
        </label>
      </form>
    </div>
  );
}

Controls.propTypes = {};

export default Controls;
