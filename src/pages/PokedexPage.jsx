import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from '../component/pokedxPage/PokeCard';
import SelecType from '../component/pokedxPage/SelecType';
import '../pages/style/pokedexPage.css'
import Paginacion from '../component/pokedxPage/Paginacion';

const PokedexPage = () => {

  const [inputValu, setInputValu] = useState('')

  const [typeSlect, setTypeSlect] = useState('allPokemon')

  const trainerName = useSelector(state => state.triner)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

  const [pokemon, getPokemon, getTypePokemon] = useFetch(url)

  const [pokemonForPage, setPokemonForPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * pokemonForPage
  const firstIndex = lastIndex - pokemonForPage

  useEffect(() => {
    if (typeSlect === 'allPokemon') {
      getPokemon()
    } else {
      getTypePokemon(typeSlect)
    }
  }, [typeSlect])

  const inputName = useRef()

  const handelSearch = e => {
    e.preventDefault()
    setInputValu(inputName.current.value.trim().toLowerCase())
  }

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValu)

  return (
    <div className="div__pokedex">
      <img className="div__pokedex__img" src="https://i.chzbgr.com/full/8546238976/h4CD253D4/pokemon-memes-pikachu-eeveelutions-gif" alt="" />
      <h2 className="div__pokedex__h2"> Welcome <span className="div__pokedex__h2__span color" >{trainerName}</span> <span className="div__pokedex__h2__span__span" >, here you can find your favorite Pokemon  </span></h2>
      <div className="div__pokedex__div__form">
      <form className="div__pokedex__form" onSubmit={handelSearch}>
        <input className="div__pokedex__input" ref={inputName} type="text" placeholder="Look for a Pokemon" />
        <button className="div__pokedex__btn">Search</button>
      </form>
      < SelecType 
        setTypeSlect={setTypeSlect}
      />
      </div>
      <div className="div__pokedex__pokeCard">
        {
          pokemon?.results.filter(cbFilter).map(pokeInfo => (
            <PokeCard
              key={pokeInfo.url}
              url={pokeInfo.url}
            />
          )).slice(firstIndex, lastIndex)
        }
      </div>
      <div className="pagina">
        <Paginacion 
      pokemonForPage={pokemonForPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      pokemon={pokemon}
      setPokemonForPage={setPokemonForPage}
      />
      </div>
      
      
    </div>
  )
}

export default PokedexPage