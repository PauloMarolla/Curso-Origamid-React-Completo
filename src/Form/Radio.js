import React from 'react';

const Radio = ({
  id,
  options,
  pergunta,
  resposta,
  onChange,
  value,
  active,
}) => {
  console.log(active);
  if (active === false) return null;
  return (
    <fieldset style={{ padding: '2rem' }}>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
