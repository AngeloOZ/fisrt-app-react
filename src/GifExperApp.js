import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import {GifGrid} from './components/GifGrid';

export const GifExperApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    return (<>
        <h2>GifExperApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ul>
            {
                categories.map((category, i) => (
                    <GifGrid
                        category={category}
                        key={i}
                    />
                ))
            }
        </ul>
    </>);
}