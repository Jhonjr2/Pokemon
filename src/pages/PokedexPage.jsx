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
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)
  const trainerName = useSelector(state => state.trainer)

  //pagination
  const [pokemonPerPage, setPokemonPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPokemon = pokemons?.results.length 
  const lasIndex = currentPage * pokemonPerPage
  const firstIndex = lasIndex - pokemonPerPage

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
 
  const selectRef = useRef()

  const handlePerPage = (e) => {
    e.preventDefault()
    setPokemonPerPage(selectRef.current.value)
    setCurrentPage(1)

  }

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
        <span className='title_PokemonPerPage'>Pokemon por página</span>
        <select className='selectPerPage' defaultValue='8' ref={selectRef} onChange={handlePerPage}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          
        </select>
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
        pokemonPerPage={pokemonPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPokemon={totalPokemon}
      />
    </div>
  )
}

export default PokedexPage