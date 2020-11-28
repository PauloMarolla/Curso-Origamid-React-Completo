import React from 'react';
import styles from './Produto.module.css';

const Produto = () => {
  console.log(styles);
  return (
    <>
      <h1 className={styles.titulo}>Titulo</h1>
      <button className={styles.btn}>Comprar</button>
    </>
  );
};

export default Produto;
