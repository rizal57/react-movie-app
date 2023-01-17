import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovieList } from '../api';
import Card from '../components/Card';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((movie) => {
      setPopularMovies(movie);
    });
  }, []);

  return (
    <div className="p-4 md:pb-4 pb-24">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {popularMovies.map((movie) => (
          <NavLink to={`/movie/${movie.id}`} key={movie.id}>
            <Card>
              <Card.Img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
              <Card.Body title={movie.title} year={movie.release_date} ratting={movie.vote_average} />
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
