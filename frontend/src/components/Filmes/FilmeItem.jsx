import React from 'react';
import { Link } from "react-router-dom"

export function FilmeItem({ item, onMouseOver }) {
  return (
    <div className='Filme-Item'>
      <Link to="/pagina2">
      {item.media && <img src={item.media.img1} onMouseOver={onMouseOver} alt="Filme" />}
      </Link>
    </div>
  );
}
