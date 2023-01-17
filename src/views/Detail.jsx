import { IconArrowNarrowLeft, IconCalendar, IconClock, IconMovie, IconStar } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { detailMovie } from '../api';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);

  function timneConvert(num) {
    let hours = Math.floor(num / 60);
    let minute = num % 60;
    return `${hours}h ${minute}min`;
  }

  useEffect(() => {
    detailMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <div className="p-4">
      <div className="mb-3">
        <button
          onClick={() => navigate(-1)}
          className="py-1 px-2 rounded-md bg-slate-800 hover:bg-slate-900 transition duration-300 flex whitespace-nowrap w-20">
          <IconArrowNarrowLeft />
          Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="Img" className={'rounded-lg w-full'} />
        </div>
        <div className="flex flex-col pb-20 md:pb-[inherit]">
          <h1 className="text-4xl font-semibold mb-2">{movie.title}</h1>
          <span className="text-sm mb-2 flex items-center gap-1">
            Rating:
            <IconStar className="w-5 text-yellow-500" />
            <span className="font-semibold">{`${movie.vote_average}`}</span>
          </span>
          <span className="text-sm mb-2 flex items-center gap-1">
            Runtime:
            <IconClock className="w-5 text-blue-500" />
            <span className="font-semibold">{`${timneConvert(movie.runtime)}`}</span>
          </span>
          <div className="text-sm mb-2 flex items-center gap-1">
            Release Date:
            <IconCalendar className="w-5 text-rose-500" />
            <span className="font-semibold">{`${movie.release_date}`}</span>
          </div>
          <div className="text-sm mb-4 flex gap-1">
            Genres:
            <IconMovie className="w-5 text-slate-500" />
            <span className="font-semibold">{`${movie.genres?.map((genre) => genre.name).join(', ')}`}</span>
          </div>

          <div className="mb-4">
            <p className="leading-relaxed">{movie.overview}</p>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold">Produced By:</h5>
            <span className="flex items-center gap-2">{`${movie.production_companies?.map((production) => production.name).join(', ')}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
