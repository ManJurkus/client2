import { useEffect, useState } from "react";
import { MoviesTable } from "../../components/MoviesTable";

export function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/movies', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h2 className='pt-3'>Movies</h2>
            {Array.isArray(movies) && <MoviesTable movies={movies} />}
            {!Array.isArray(movies) && <div>ERROR...</div>}
        </>
    );
}