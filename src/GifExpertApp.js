import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Naruto', 'Caballeros del zodiaco', 'Dragon ball']
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Anime']);
    //     setCategories(cats => [...cats, 'Anime']);
    // }

    return (
        <>
            <h2>GiExpertApp</h2>

            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
