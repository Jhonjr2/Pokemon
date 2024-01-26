import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import '../components/style/PokemonPage.css';
import '../components/style/gradient-color.css';

const PokemonPage = () => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, []);

  console.log(pokemon);

  return (
    <div className="pokemonPage">

      <header className="header_pokemonPage">
        <img src="../image_header_global.png" alt="image_global" />
      </header>

      <div className="Sections_pokemonPage">
        <section className="container1_pokemonPage">
          <div className={`background_imageContainer1 ${pokemon?.types[0].type.name}`}>
            <img className="image_Container1" src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
          </div>
          <div className="info_pokemonPage">
            <div className="Number_container1">
              <h3>#<span>{pokemon?.id}</span></h3>
            </div>
            <div className="hr_name">
              <hr className="hr_name"/>
              <h2 className="namePokemon_Container1">{pokemon?.name}</h2>
              <hr className="hr_name" />
            </div>
            <div className="info1_container1">
              <p className="weight_container1"><span className="label_container1">Peso</span><span className="value_container1">{pokemon?.weight}</span></p>
              <p className="height_container1"><span className="label_container1">Altura</span><span className="value_container1">{pokemon?.height}</span></p>
            </div>
            <div className="info2_container1">
              <div className="type_container1">
                <h3 className="text_typeAndHabilid">Tipo</h3>
                <ul className={`types ${pokemon?.types[0].type.name}`}>
                  {
                    pokemon?.types.map(typeInfo => (
                      <li  key={typeInfo.type.url}>
                        {typeInfo.type.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="habilidades_container1">
                <h3 className="text_typeAndHabilid">Habilidades</h3>
                <ul className={`habilidades`}>
                  {
                    pokemon?.abilities.map(abilitieInfo => (
                      <li  key={abilitieInfo.ability.url}>
                        {abilitieInfo.ability.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="stats_container1">
            <div className="stats_title_container1">
              <h1>Stats</h1>
              <hr  />
              <img src="../icon_poke.png" alt="icon" />
            </div>
            <div>
              <ul className="stats_general">
                {
                  pokemon?.stats.map(e =>

                    <div key={e.stat.name}>
                      <li className="label_stat_container1" >
                        {e.stat.name}
                        <p>{e.base_stat} /150</p>
                      </li>
                      <progress max={155} value={e.base_stat} className={`progress_bar ${pokemon?.types[0]?.type.name || ''}`}></progress>
                    </div>
                  )
                }
              </ul>
            </div>
          </div>
        </section>

        
      </div>
      <section className="container2_pokemonPage">
          <div className="movements_title_container2">
            <h1>Movements</h1>
            <hr />
            <img src="../icon_poke.png" alt="icon" />
          </div>
          <div>
            <ul className="move_list_container2">
              {
                pokemon?.moves.map(e => (
                  <li className="move_container2" key={e.move.url}>{e.move.name}</li>
                ))

              }
            </ul>
          </div>
        </section>
    </div>
  )
}

export default PokemonPage