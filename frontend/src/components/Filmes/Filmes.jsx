import { useState, useEffect } from 'react';
import { FilmeItem } from './FilmeItem';
import './styles.css';
import axios from 'axios';
import { FilmeSelec } from './FilmeSelec';

export function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/movies')
      .then(res => {
        const filmesData = res.data.content;
        setFilmes(filmesData);
        if (filmesData.length > 0) {
          setFilmeSelecionado(filmesData[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleMouseOver = (filme) => {
    setFilmeSelecionado(filme);
  };

  return (
    <div className='Filmes'>
      <div className='Container-FilmeSelec'>
      {filmeSelecionado && (
        <FilmeSelec
          Sinopse={filmeSelecionado.description}
          Titulo={filmeSelecionado.title}
          TrailerLink={filmeSelecionado.media.trailer_link1}
          imgselec={filmeSelecionado.media.img2}
        />
      )}
      </div>
      <div className='Filmes-Destaque'>
        <h1>Em cartaz</h1>
        <div className='filmes-itens'>
          {filmes.slice(0, 8).map((filme, index) => (
            <FilmeItem
              key={index}
              item={filme}
              onMouseOver={() => handleMouseOver(filme)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}