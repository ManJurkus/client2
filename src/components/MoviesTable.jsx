import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieView } from './MovieView';

export function MoviesTable({ movies }) {
    const [view, setView] = useState(false);

    function updateView(e) {
        setView(!view);
    }
    console.log(view);

    console.log(movies);
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movie name</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </tr>
                    
                </thead>
                
                <tbody>
                    {
                        movies.map((movie, idx) => (
                            <tr>
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{movie.name}</td>
                                <td>
                                    <button onClick={updateView} value={view} className='btn btn-primary'>VIEW</button>
                                    
                                    <button className='btn btn-primary'>EDIT</button>
                                    <button className='btn btn-primary'>DELETE</button>
                                </td>
                                
                                
                            </tr>
                            {view ? <MovieView /> : ''}
                            </tr>
                            
                        ))
                    }
                   
                </tbody>
                
            </table>
            {
                movies.length === 0 && (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        Panašu, jog neturi jokių filmų. Eik ir <Link to="/movies/add" className="alert-link">sukurk naują filmą</Link>.
                    </div>
                )
            }
        </div>
    );
}