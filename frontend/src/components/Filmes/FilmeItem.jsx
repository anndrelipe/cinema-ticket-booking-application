import React from 'react';
import { Link } from "react-router-dom"

export function FilmeItem({ item, onMouseOver }) {
  return (
    <div className='Filme-Item'>
      <Link to={`/movie/${item._id}`}>
      {item.media && <img src={item.media.img1} onMouseOver={onMouseOver} alt="Filme" />}
      </Link>
    </div>
  );
}
