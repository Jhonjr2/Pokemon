import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import '../style/SelectType.css'

const SelectType = ({setTypeSelect}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    },[])

    const typeRef= useRef()

    const handleChange = () => {
        setTypeSelect(typeRef.current.value)
    }

  return (
    <select className='SelectType' ref={typeRef} onChange={handleChange}>
        <option value="allPokemon">Todos los pokemones</option>
        {
            types?.results.map(e => (
                <option  key={e.url} value={e.url}>{e.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType