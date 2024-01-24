import { useParams } from "react-router-dom"
import useFetch from "../hook/useFetch"
import { useEffect } from "react"
import '../pages/style/pokemonPage.css'

const PokemonPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  console.log(pokemon);

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div>
      <img className="pakemonPage__div__img" src="https://i.pinimg.com/originals/df/2a/c5/df2ac5347dea1da9df37dbd3664a331c.gif" alt="" />
      <div className={`pakemonPage__div__conten`}>
        <div className="pakemonPage__div__bg">
          <div className={`pakemonPage__border ${pokemon?.types[0].type.name}`}>
            <img className="pakemonPage__div__pokemon" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <section className="pakemonPage__div__section">
            <h2 className="pakemonPage__div__h2"># {pokemon?.id}</h2>
            <h3 className="pakemonPage__div__h3">{pokemon?.name}</h3>
            </section>
            <ul className="pakemonPage__div__medidas">
              <li className="pakemonPage__div__medidas__li"><span className="pakemonPage__div__li__span">Weight</span><span className="pakemonPage__div__li__span__medidas">{pokemon?.weight}</span></li>
              <li className="pakemonPage__div__medidas__li"><span className="pakemonPage__div__li__span">Height </span><span className="pakemonPage__div__li__span__medidas">{pokemon?.height}</span></li>
            </ul>
            <div className="pakemonPage__div__ability">
              <ul className="pakemonPage__div__ability__ul">
                <li className="pakemonPage__div__ability__li"><span className="pakemonPage__div__ability__span">Type</span><span className="pakemonPage__div__ability__li__span">{pokemon?.types[0].type.name}</span><span className="pakemonPage__div__ability__li__span__last">{pokemon && pokemon?.types[1].type.name}</span></li>
                <li className="pakemonPage__div__ability__li"><span className="pakemonPage__div__ability__span">Ability</span><span className="pakemonPage__div__ability__li__span-2">{pokemon?.abilities[0].ability.name}</span><span className="pakemonPage__div__ability__li__span__last-2">{pokemon?.abilities[1].ability.name}</span></li>
              </ul>
            </div>
            <div>
              <h2>Stats</h2>
                <ul className="container__stats__info">
                 {
                  pokemon?.stats.map(statInf => 
                    <li className="stats__info" key={statInf.stat.url}>
                      <div className="header__stat__info">
                        <span className="stat__info__stats">
                          {statInf.stat.name}
                        </span>
                        <span>
                          {statInf.base_stat}/150
                        </span>
                      </div>
                      <progress className={`progress__bar__stats ${pokemon?.types[0].type.name}`} max='150' value={`${statInf.base_stat}`}></progress>
                    </li>
                    )
                 }

                </ul>
            </div>
            
        </div>
      </div>
      <section className="pakemonPage__move">
      <h2 className="pakemonPage__move__h2">Movements</h2>
        <div className="pakemonPage__move__div">
          {
            pokemon?.moves.map(moveInfo => 
              <li className="pakemonPage__move__li" key={moveInfo.move.url}>
                <span className="pakemonPage__move__span">{moveInfo.move.name}</span>
              </li>
              )
          }
        </div>
      </section>
      
    </div>
  )
}

export default PokemonPage