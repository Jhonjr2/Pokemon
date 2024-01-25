import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
 
    const [reponse, setReponse] = useState()


    const getApi = () => {
        axios.get(url)
         .then(res => setReponse(res.data))
         .catch(err => console.log(err))
    }
    const getTypePokemon = (urlType) => {
        axios.get(urlType)
         .then(res => {
            const obj = {
                results: res.data.pokemon.map(e => e.pokemon)
            }
            setReponse(obj)
         })
         .catch(err => console.log(err))
    }

    return [reponse, getApi, getTypePokemon ]
}

export default useFetch