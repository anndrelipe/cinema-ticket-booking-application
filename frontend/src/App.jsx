import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Filmes } from "./components/Filmes/Filmes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Filmes/>
    <Footer/>
    </>
  );
}

export default App;
