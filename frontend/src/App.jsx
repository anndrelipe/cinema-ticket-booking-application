import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Sessoes } from './Pages/Sessoes/Sessoes';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie/:id" element={<Sessoes/>} />
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
