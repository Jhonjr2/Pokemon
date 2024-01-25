import './App.css'
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokemonPage from "./pages/PokemonPage";
import { Route, Routes } from 'react-router-dom'
import ProtecteRoutes from './pages/ProtecteRoute'


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtecteRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokemonPage />} />
        </Route>
      </Routes>
    </div>
  </>
  )
}

export default App
