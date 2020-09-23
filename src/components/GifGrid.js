import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]) ;

    const { data:images, loading } = useFetchGifs(category);



    // con el arreglo vació solo se ejecuta una vez lo que está dentro del effect. Se ejecuta cuando se renderiza por primera vez el componente
    // useEffect(() => {
    //     getGifs(category).then(setImages(imgs));
    // }, [])

    // si se envía en el arreglo de dependecias, cada vez que se actualice category se va a ejecutar el effect
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
