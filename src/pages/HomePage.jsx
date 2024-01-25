import { useRef } from "react"
import { setTrainerG } from '../store/states/trainer_state'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/style/HomePage.css'


const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }


    return (
        <div className="homePage">
            <div className="homePage_body">
                <img className="homePage_image" src="./pokemon.png" alt="" />
                <h2 className="homePage_title1">¡Hi trainer!</h2>
                <p className="homePage_title2"> To star this app, give  me you trainer name</p>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="homPage_input" ref={inputTrainer} type="text" />
                    <button className="homePage_btn">Catch  all</button>
                </form>
            </div>
            <img className="homePage_footer" src="./footer.png" alt="footer_home" />
        </div>
    )
}

export default HomePage