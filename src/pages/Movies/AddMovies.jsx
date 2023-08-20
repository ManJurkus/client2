import { useState } from "react";
import { slugify } from "../../lib/slugify";
import defaultPreview from '../../assets/preview.png';

export function AddMovie() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState(0);
    const [image, setImage] = useState('');
    const [imageAlt, setImageAlt] = useState('');

    function updateName(e) {
        setName(e.target.value);
        setSlug(slugify(e.target.value));
    }

    function updateReleaseYear(e) {
        setYear(e.target.value);
    }

    function updateDirector(e) {
        setDirector(e.target.value);
    }

    function updateGenre(e) {
        setGenre(e.target.value);
    }

    function updateDuration(e) {
        const n = parseInt(e.target.value);
        setDuration(n > 0 ? n : 0);
    }

    function updateImage(e) {
        const formData = new FormData();
        formData.append('image_file', e.target.files[0]);

        fetch('http://localhost:3001/api/upload', {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => setImage(`http://localhost:3001/images/${data.path}`))
            .catch(err => console.error(err));
    }

    function updateImageAlt(e) {
        setImageAlt(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/api/movies', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name, slug, year, director, genre, duration, image, imageAlt,
            }),
        })
            .then(res => res.json())
            .then(console.log)
            .catch(err => console.error(err));
    }

    return (
        <>
            <h1 className="h1 mt-3 mb-5 pb-2 border-bottom">Add movie</h1>
            <div className="col-md-7 col-lg-8">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-12">
                            <label htmlFor="movieName" className="form-label">Movie name</label>
                            <input onChange={updateName} value={name} type="text"
                                className="form-control" id="movieName" placeholder="Movie name" required />
                            <div className="invalid-feedback">
                                Valid Movie name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="slug" className="form-label">Slug</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text">@</span>
                                <input defaultValue={slug} type="text" className="form-control" id="slug"
                                    placeholder="Slug" disabled />
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="releaseYear" className="form-label">Release year</label>
                            <input onChange={updateReleaseYear} value={year} type="number"
                                className="form-control" id="releaseYear" placeholder="Release year" required />
                            <div className="invalid-feedback">
                                Valid Release year is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="director" className="form-label">Director</label>
                            <input onChange={updateDirector} value={director} type="text"
                                className="form-control" id="director" placeholder="Director" required />
                            <div className="invalid-feedback">
                                Valid Director is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <select onChange={updateGenre} value={genre} className="form-select" id="genre">
                                <option value="" >Open this select menu</option>
                                <option value="drama">Drama</option>
                                <option value="triller">Triller</option>
                                <option value="comedy">Comedy</option>
                            </select>
                            <div className="invalid-feedback">
                                Valid Genre is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="duration" className="form-label">Duration, minutes</label>
                            <input onChange={updateDuration} value={duration} type="number"
                                className="form-control" id="duration" placeholder="Duration" required />
                            <div className="invalid-feedback">
                                Valid Duration is required.
                            </div>
                        </div>

                        <hr className="my-4" />
                        <h4 className="mb-3">Image</h4>

                        <div className="col-12">

                            <div className="row g-3">
                                <div className="col-3">
                                    <img src={image ? image : defaultPreview} alt="Preview" style={{ height: 80, width: 80, objectFit: 'contain', }}
                                        className="me-5" />
                                </div>
                                <div className="col-9">
                                    <label className="form-label" htmlFor="coverImage">Upload cover image</label>
                                    <input onChange={updateImage} type="file" className="form-control" id="coverImage" />
                                    <div className="invalid-feedback">
                                        Valid Cover image is required.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="imageAlt" className="form-label">Cover alt text</label>
                            <input onChange={updateImageAlt} value={imageAlt} type="text"
                                className="form-control" id="imageAlt" placeholder="Cover alt text" required />
                            <div className="invalid-feedback">
                                Valid Cover alt text is required.
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary btn-lg" type="submit">Create movie</button>
                </form>
            </div>
        </>
    );
}