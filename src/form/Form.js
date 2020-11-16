import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const array = ['item1', 'item2'];

  return (
    <>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Senha" />
      <Button items={array} />
    </>
  );
};

export default Form;
