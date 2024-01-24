
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';
import PortectecRoute from './pages/PortectecRoute';

function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route element={<PortectecRoute/>}>
          <Route path='/pokedex' element={<PokedexPage/>} />
          <Route path='/pokedex/:id' element={<PokemonPage/>} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
