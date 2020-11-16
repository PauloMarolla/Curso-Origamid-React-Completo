import React from 'react';

// props pode ser utilizado como rest/spread para adicionar quantas propriedades quiser no component
const Input = ({ label, id, ...props }) => {
  console.log(props);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </>
  );
};

export default Input;
