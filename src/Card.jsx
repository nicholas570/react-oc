import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const HIDDEN_SYMBOL = '?';

function Card({ card, feedback, index, onClick }) {
  return (
    <button
      type="button"
      className={`card ${feedback}`}
      onClick={() => onClick(index)}
    >
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </button>
  );
}

Card.propTypes = {
  card: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'visible',
    'hidden',
    'justMatched',
    'justMismatched',
  ]).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
