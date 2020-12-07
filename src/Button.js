import React from 'react';
import PropTypes from 'prop-types';
//importa o proptypes

const Button = (props) => {
  return (
    <button
      style={{ width: `${props.width / 2}px`, margin: `${props.margin}` }}
    >
      clique aqui
    </button>
  );
};

//caso queira que algum valor seja padrao
Button.defaultProps = {
  margin: '100px',
};
//define as propriedades, number, string e etc, e tbm se é required
Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;
