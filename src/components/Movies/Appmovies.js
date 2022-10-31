import React from 'react';
import { useState, useEffect, useCallback } from 'react'
import MoviesList from './MoviesList';
import AddMovie from './AddMovie';
import './Appmovies.css';

function App() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('https://react-http-8cea9-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json')

            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            const data = await response.json()
            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                }
            })
            setMovies(transformedMovies)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [fetchMoviesHandler])

    async function addMovieHandler(movie) {
        await fetch('https://react-http-8cea9-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    let content = <p>No movies found.</p>

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
