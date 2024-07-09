import './styles.css';

export function FilmeSelec(props) {
  return (
    <div className="Filme-Selec">
      <div className='Filme-Desc'>
        <h1>{props.Titulo}</h1>
        <p>{props.Sinopse}</p>
        <a href={props.TrailerLink}>Trailer</a>
        <a href={props.IngressLink}>Comprar Ingresso</a>
      </div>
      <div className='img-container'>
      <img src={props.imgselec} alt="" />
      </div>
    </div>
  )
}