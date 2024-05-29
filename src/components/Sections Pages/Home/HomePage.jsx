import React from 'react'
import { Header } from '../Header/Header';
import { Presentation } from '../Presentation/Presentation';
import { Planes } from '../Planes/Planes';
import './homepage.css'

export const HomePage = () => {
 return (
    <div className='app-container'>
      <Header/>
      <Presentation/>
      <Planes/>
    </div>

  );
}
