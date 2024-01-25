import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../style/PokemonCard.css'
import '../style/gradient-color.css'



const PokemonCard = ({ url }) => {


  const [pokemon, getpokemon] = useFetch(url)

  useEffect(() => {
    getpokemon()
  }, [])

  const handleNavigatePoke = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  
  const navigate = useNavigate()

  return (

    <div className={`pokeCard_borde ${pokemon?.types[0].type.name}`} onClick={handleNavigatePoke}>
      <article className="pokeCard" >
        <header className="pokeCard_header">
          <img className="pokeCard_image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
        </header>
        <section className="pokeCard_body">
          <h3 className="pokeCard_name">{pokemon?.name}</h3>
          <ul className="pokeCard_types">
            {
              pokemon?.types.map(typeInfo => (
                <li className="pokeCard_type_items" key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          <hr className="pokeCard_hr"/>
          <ul className="pokeCard_stat">
            {
              pokemon?.stats.map(statInfo => (
                <li className="pokeCard_stat_items" key={statInfo.stat.url}>
                  <span className="pokeCard_stat_label">{statInfo.stat.name}</span>
                  <span className="pokeCard_stat_value">{statInfo.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>

  )
}

export default PokemonCard