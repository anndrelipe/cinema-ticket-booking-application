import { Navbar } from "../../components/Navbar/Navbar";
import { Filmes } from "../../components/Filmes/Filmes";
import { Footer } from "../../components/Footer/Footer";
import { Conteudo } from "../../components/Conteudo/Conteudo";

export function Home() {
  return(
    <div className="App">
      <Navbar/>
        <Conteudo>
          <Filmes/>
        </Conteudo>
      <Footer/>
    </div>
  )
}