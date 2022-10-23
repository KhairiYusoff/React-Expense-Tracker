import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const [items, setItems] = useState([])
    const [buttons, setButtons] = useState('posts')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div>
            <button onClick={() => setButtons('posts')}>Posts</button>
            <button onClick={() => setButtons('comments')}>Comments</button>
            <button onClick={() => setButtons('albums')}>Albums</button>
            <h1>{buttons}</h1>
        </div>
    )
}

export default Useeffect