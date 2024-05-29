import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header className='header-container'>
        <div className='boton-home'>
            <button>Home</button>
        </div>
        <div className='demas-botones'>
            <button>Videos y Tips</button>
            <button>Sobre mi</button>
            <button>Planes</button>
            <button>Blog</button>
            <button>Carrito</button>

        </div>
    </header>
   
  )
}
