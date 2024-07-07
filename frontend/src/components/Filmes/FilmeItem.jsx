import React from 'react';

export function FilmeItem({ item, onMouseOver }) {
  return (
    <div className='Filme-Item'>
      {item.media && <img src={item.media.img1} onMouseOver={onMouseOver} alt="Filme" />}
    </div>
  );
}
