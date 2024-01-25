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
            <ul className='container__types__abilities'>
                            <li className='types__abilities__item'>
                                <span className='pokemon__type__label'>Type</span>
                                <ul className='values__types__abilities'>
                                    {

                                        pokemon?.types.map(typeInfo =>
                                            <li  className={`types__list__item ${typeInfo.type.name}`} key={typeInfo.type.url}>
                                                {typeInfo.type.name}</li>)
                                    }
                                </ul>
                            </li>
                            <li className='types__abilities__item'>

                                <span className='pokemon__abilities__label'>Ability</span>
                                <ul className='values__types__abilities'>
                                    {
                                        pokemon?.abilities.map(abilityInfo =>
                                            <li className="types__list__item" key={abilityInfo.ability.url}>
                                                {abilityInfo.ability.name}</li>)
                                    }
                                </ul>
                            </li>
                        </ul>
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