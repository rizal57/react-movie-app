import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../views/Detail';
import Home from '../views/Home';
import SearchMovies from '../views/SearchMovies';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/search" element={<SearchMovies />} />
      </Routes>
    </div>
  );
};

export default Router;
