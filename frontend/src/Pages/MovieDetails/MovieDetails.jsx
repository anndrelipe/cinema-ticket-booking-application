import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
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
    <div className='movie-details'>
      <h1>{movie.title}</h1>
      <img src={movie.media.img1} alt={movie.title} />
      <p><strong>Classificação Indicativa:</strong> {movie.parental_rating}</p>
      <p><strong>Duração:</strong> {movie.duration_time} minutes</p>
      <p><strong>Generos:</strong> {movie.genres.join(', ')}</p>
      <p><strong>Descrição:</strong> {movie.description}</p>
      <p><strong>Direção:</strong> {movie.datasheet.direction.join(', ')}</p>
      <p><strong>Distribuição:</strong> {movie.datasheet.distribution}</p>
      <p><strong>País:</strong> {movie.datasheet.original_country}</p>
      {movie.media.trailer_link1 && <a href={movie.media.trailer_link1} target="_blank" rel="noopener noreferrer">Assista o Trailer</a>}
    </div>
  );
}

export default MovieDetails;



