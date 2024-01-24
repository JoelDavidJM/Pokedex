import { useEffect } from "react"
import useFetch from "../../hook/useFetch"
import { useNavigate } from "react-router-dom"
import '../style/PokeCard.css'

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch(url) 

    useEffect(() => {
        getPokemon()
    }, [])

    const navigate = useNavigate()

    const handleNavigatePokemon = () => {
      navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <div className={`pokecard__border ${pokemon?.types[0].type.name}`} onClick={handleNavigatePokemon}>
      <article className="pokeCard">
        <header className="pokeCard__header">
          <img className="pokeCard__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="pokeCard__body">
          <h3 className="pokeCard__name">{pokemon?.name}</h3>
          <ul className="pokeCard__type">
            {
              pokemon?.types.map(typeInfo => (
                <li className="pokeCard__type__item" key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          <hr className="pokeCard__hr"/>
          <ul className="pokeCard__stats">
            {
              pokemon?.stats.map(statInfo => (
                <li className="pokeCard__stats__item" key={statInfo.stat.url}>
                  <span className="pokeCard__stats__label">{statInfo.stat.name}</span>
                  <span className="pokeCard__stats__value">{statInfo.base_stat}</span></li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>
  )
}

export default PokeCard