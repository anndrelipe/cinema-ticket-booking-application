import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function FilmeDetalhes() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/movies')
      .then(res => {
        const movies = res.data.content;
        // Encontrar o filme pelo id
        const selectedMovie = movies.find(movie => movie._id === id);
        setMovie(selectedMovie);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='filme-detalhes'>
        <div className='filme-detalhes-wrap' style={{backgroundImage: `url('${movie.media.img2}')`}}>

        <img src={movie.media.img1} alt={movie.title} />
        
          <div className='filme-detalhes-desc'>
            <div className="filme-detalhes-desc-up">
              <h1>{movie.title}</h1>
              <p><strong>Classificação Indicativa:</strong> {movie.parental_rating} anos</p>

              <div className='filme-detalhes-desc-info'>
                <p>{movie.duration_time} minutos</p>
                <div className='filme-detalhes-desc-info-divisao'></div>
                <p>{movie.genres.join(', ')}</p>
              </div>
              <p className='filme-detalhes-sinopse'>{movie.description}</p>
            </div>


              <div className='filme-detalhes-trailer'>
              {movie.media.trailer_link1 && <a href={movie.media.trailer_link1} target="_blank" rel="noopener noreferrer">Assista o Trailer</a>}
              </div>
          </div>
          
        </div>
      </div>
  )
}