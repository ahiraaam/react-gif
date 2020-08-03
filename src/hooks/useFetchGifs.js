import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) =>{
    //al inicio va a estar cargando
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    //useEffect solo se va a disparar cuando cambie la categoria
    useEffect( () =>{
        getGifs(category)
            .then(imgs => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                
            })
    }, [category]) //si la categoria cambia se vuelve a ejecutar useEffect*/
    //si el arreglo es vacio solo ejecuta una vez



    return state //{data: [], loading: true}
}