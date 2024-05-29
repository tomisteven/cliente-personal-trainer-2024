import React from 'react';

export const PlantillaPlan = ({ nombreDelPlan, descripcionDelplan, precioDelPlan }) => {
  return (
    <div className='card'>
      <h2>{nombreDelPlan}</h2>
      <p>{descripcionDelplan}</p>
      <div className='price'>{precioDelPlan}</div>
      <button>Seleccionar Plan</button>
    </div>
  );
};
