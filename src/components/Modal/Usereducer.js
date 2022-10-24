import React, { useState } from 'react'

const Usereducer = () => {

    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({})
    const [error, setError] = useState(false)

    const handleFetch = () => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts/163263")
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setPost(data);
                setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setLoading(false)
            })
    }

    return (
        <div>
            <button onClick={handleFetch}>
                {loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{post?.title}</p>
            <span>{error && "Something went wrong!"}</span>
        </div>
    )
}

export default Usereducer