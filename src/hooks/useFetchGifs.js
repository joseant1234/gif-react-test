import { useState, useEffect } from "react"
import { getGifs }  from '../helpers/getGifs';

// los custom hooks funcionan como functional components, puedes tener efectos, reducers, contextos
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // los efectos no pueden ser async (useEffect(async() ), porque esperan ser sincronos
    useEffect(() => {
        getGifs(category).then(imgs => {

            setState({
                data: imgs,
                loading: false,
            });
        })
    }, [category])

    return state;
}
