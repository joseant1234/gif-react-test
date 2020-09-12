import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]) ;


    // con el arreglo vació solo se ejecuta una vez lo que está dentro del effect. Se ejecuta cuando se renderiza por primera vez el componente
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=XU8ZSAAVXGf948DC3MQyvHBIoB9tQyx1'
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        setImages(gifs);

    }

    return (
        <div>
            <h3>{ category }</h3>
            {
                images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    )
}
