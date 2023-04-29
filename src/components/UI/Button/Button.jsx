import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children }) => (
  <button type="submit" className="button">
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
