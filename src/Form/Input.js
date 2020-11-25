import React from 'react';

// desestruturo os dados mais comuns e uso rest para todas as demais propriedades
const Input = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
