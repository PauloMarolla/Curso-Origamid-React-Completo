import React from 'react';

// desestruturo os dados mais comuns e uso rest para todas as demais propriedades
const Input = ({ label, id, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        //uso rest para todas as demais propriedades
        {...props}
      />
    </>
  );
};

export default Input;
