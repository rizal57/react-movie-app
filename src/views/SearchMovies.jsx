import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getSearchMovies } from '../api';
import Card from '../components/Card';

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const search = async (q) => {
        let { results } = await getSearchMovies(q);
        setMovies(results);
    };

    return (
        <div className="p-4">
            <div className="mb-4 w-full flex items-center justify-center">
                <input
                    onChange={({ target }) => search(target.value)}
                    name="search"
                    id="search"
                    type="text"
                    className="w-full max-w-lg rounded-md py-2 px-3 text-slate-600 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-blue-500 transition ease-in duration-300"
                    placeholder="Search Movie..."
                />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                        <Card>
                            <Card.Img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} />
                            <Card.Body title={movie.title} year={movie.release_date} ratting={movie.vote_average} />
                        </Card>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SearchMovies;
