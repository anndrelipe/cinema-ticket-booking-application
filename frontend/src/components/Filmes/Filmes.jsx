import { useState, useEffect } from 'react';
import { FilmeItem } from './FilmeItem';
import './styles.css';
import axios from 'axios';

export function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/movies')
      .then(res => {
        setFilmes(res.data.content); // Assumindo que a resposta é uma lista de filmes
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='Filmes'>
      <div className='Filmes-Destaque'>
      <h1>Em cartaz</h1>
      <div className='filmes-itens'>
      {filmes.slice(0, 8).map((filme, index) => (
        <FilmeItem
          key={index}
          item={filme}
        />
      ))}
      </div>
      </div>
    </div>
  );
}