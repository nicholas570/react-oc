import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './HighScoreInput.css';

import { saveHOFEntry } from './HallOfFame';

class HighScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: '',
    };
  }

  render() {
    return (
      <form className="highScoreInput">
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input
              autoComplete="given-name"
              type="text"
              value={this.state.winner}
            />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    );
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
};

export default HighScoreInput;
