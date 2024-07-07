import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Filmes } from "./components/Filmes/Filmes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <div className='Conteudo'>
      <Filmes/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
