import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ nameOfClass, value, onClick }) {
  return (
    <input
      className={nameOfClass}
      type="button"
      value={value}
      onClick={onClick}
    />
  );
}

export default Button;

Button.propTypes = {
  nameOfClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
