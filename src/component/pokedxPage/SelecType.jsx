import { useEffect, useRef } from "react"
import useFetch from "../../hook/useFetch"
import '../style/selectType.css'

const SelecType = ({setTypeSlect}) => {

    const url = `https://pokeapi.co/api/v2/type`
    const [ type, getType ] = useFetch(url)

    useEffect(() => {
        getType()
    }, [])

    const typeRef = useRef()

    const handleChange = () => {
        setTypeSlect(typeRef.current.value)
    }

  return (
    <select className="select__selectType" ref={typeRef} onChange={handleChange}>
        <option className="select__selectType__option" value={'allPokemon'} >All Pokemons</option>
        {
            type?.results.map(type => (
                <option className="select__selectType__option__type" key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelecType