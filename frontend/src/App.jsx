import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Pagina2 } from './Pages/Pagina2/Pagina2';
import { Pagina3 } from './Pages/Pagina3/Pagina3';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pagina2' element={<Pagina2/>}/>
        <Route path='/pagina3' element={<Pagina3/>}/>
      </Routes>
    </Router>

    // <div className="App">
    //   <Navbar/>
    // <div className='Conteudo'>
    //   <Filmes/>
    // </div>
    //   <Footer/>
    // </div>
  );
}

export default App;
