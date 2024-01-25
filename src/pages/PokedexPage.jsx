import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokemonCard from '../components/PokedexPage/PokemonCard'
import SelectType from '../components/PokedexPage/SelectType'
import '../components/style/PokedexPage.css'
import Pagination from '../components/Pagination/Pagination'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelect, setTypeSelect] = useState('allPokemon')
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)
  const trainerName = useSelector(state => state.trainer)

  //pagination
  const [residentPerPage, setResidentPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPokemon = pokemons?.results.length 
  const lasIndex = currentPage * residentPerPage
  const firstIndex = lasIndex - residentPerPage

 console.log(pokemons);
  useEffect(() => {
    if (typeSelect === 'allPokemon') {
      getPokemons()
    } else {
      getTypePokemon(typeSelect)
    }
    getPokemons()
  }, [typeSelect]);

  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }
  const cbfilter = (e) => e.name.toLowerCase().includes(inputValue)

  return (
    <div className='pokedexPage'>
      <header className='header_image'>
        <img src="../image_header_global.png" alt="image_global" />
      </header>
      <h1 className='title_pokedexPage'><span className='TitleColor'>Bienvenido {trainerName}, </span> <span className='title2'>aquí podrás encontrar tu pokemon favorito</span></h1>
      <div className='input_select'>
        <form className="form_pokedexPage" onSubmit={handleSearch}>
          <input className='input_pokedexPage' ref={inputName} placeholder='Busca un pokemon' />
          <button className='btm_pokedexPage'>Buscar</button>
        </form>
        <SelectType setTypeSelect={setTypeSelect} />

      </div>
      <div className='pokedexPage_containerCard'>
        {
          pokemons?.results.filter(cbfilter).map(pokeinfo => (
            <PokemonCard
              key={pokeinfo.url}
              url={pokeinfo.url}
            />
          )).slice(firstIndex, lasIndex)
        }
      </div>

      <Pagination
        residentPerPage={residentPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemon={totalPokemon}
      />
    </div>
  )
}

export default PokedexPage