import './styles.css';

export function FilmeSelec(props) {
  return (
    <div className="Filme-Selec">
      <div>
        <h1>{props.Titulo}</h1>
        <p>{props.Sinopse}</p>
        <a href={props.TrailerLink}>Trailer</a>
      </div>
      <img src={props.imgselec} alt="" />
    </div>
  )
}