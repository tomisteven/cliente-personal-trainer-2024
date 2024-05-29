import React from "react";
import "./header.css";
import {useNavigate} from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  const handleVideosYTips =()=>{
    navigate('/Videos-Y-Tips');
  }

  const handleHome=()=>{
    navigate('/')
  }
/*---------------------aca hay que modificar algo pero no me doy cuenta que--------------------*/ 
  return (
    <header className="header-container">
      <div className="boton-home">
        <button onClick={handleHome} >Home</button>
      </div>
      <div className="demas-botones">
        <button onClick={handleVideosYTips} > Videos y Tips </button>
        <button>Sobre mi</button>
        <button>Planes</button>
        <button>Blog</button>
        <button>Carrito</button>
      </div>
    </header>
  );
};
