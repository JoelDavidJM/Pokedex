import { useRef } from "react"
import { setTrainer } from "../store/state/trainer.stete"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../pages/style/homePage.css'

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="div__home">
        <img className="div__home__img" src="https://pokemasters.net/pokedex/images/pokedex_banner.png" alt="" />
        <h2 className="div__home__h2">¡Hi trainer!</h2>
        <p className="div__home__p">To start this app, give me your trainer name</p>
        <form className="div__home__form" onSubmit={handleSubmit}>
            <input className="div__home__input" ref={inputTrainer} type="text" placeholder="You name" />
            <button className="div__home__btn">Catch them all</button>
        </form>
    </div>
  )
}

export default HomePage