import React from 'react';

export function FilmeItem({ item }) {
  return (
    <div className='Filme-Item'>
      {item.media && <img src={item.media.img1} alt="Filme" />}
    </div>
  );
}