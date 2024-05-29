import React from 'react';
import './planes.css';
import { PlantillaPlan } from './PlantillaPlan';

export const Planes = () => {
  return (
    <div className='container-planes'>
      <div className='container-plan'>
        <PlantillaPlan 
          nombreDelPlan='Plan Básico' 
          descripcionDelplan='Este es el peor plan de todos' 
          precioDelPlan='$100' 
        />
      </div>

      <div className='container-plan'>
        <PlantillaPlan 
          nombreDelPlan='Plan Medio' 
          descripcionDelplan='Este es el plan más recomendado' 
          precioDelPlan='$150' 
        />
      </div>

      <div className='container-plan'>
        <PlantillaPlan 
          nombreDelPlan='Plan Premium' 
          descripcionDelplan='Este es el mejor plan de todos' 
          precioDelPlan='$200' 
        />
      </div>
    </div>
  );
};
