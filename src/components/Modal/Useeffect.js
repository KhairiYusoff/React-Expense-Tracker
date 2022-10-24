import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const [items, setItems] = useState([])
    const [buttons, setButtons] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${buttons}`)
            .then(res => res.json())
            .then(json => setItems(json))
    }, [buttons])

    return (
        <div>
            <button onClick={() => setButtons('posts')}>Posts</button>
            <button onClick={() => setButtons('comments')}>Comments</button>
            <button onClick={() => setButtons('albums')}>Albums</button>
            <h1>{buttons}</h1>
            {items.map(item =>
                <div>
                    <div>{item.title}</div>
                    <div>{item.email}</div>
                </div>

            )}
        </div>
    )
}

export default Useeffect