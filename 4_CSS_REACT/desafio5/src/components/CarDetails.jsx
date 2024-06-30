import React from 'react'
import styles from './CarDetails.module.css';

const CarDetails = ({car}) => {
  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.h2}>{car.nome}</h2>
        <p>Marca : {car.marca}</p>
        <p>Cor: {car.cor}</p>
        <p>Ano:{car.ano}</p>
        <p>Preço:{car.preco}</p>
      </div>
    </div>
  );
}

export default CarDetails;