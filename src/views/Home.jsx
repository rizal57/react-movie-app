import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { getMovieList, getPopular, getUpComming } from '../api';
import Card from '../components/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../layouts/Container';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    let settings = {
        dots: false,
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                initialSlide: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '1rem',
                },
            },
        ],
    };

    useEffect(() => {
        getPopular().then((movie) => {
            setPopularMovies(movie);
        });

        getMovieList().then((movie) => {
            setTrending(movie);
        });

        getUpComming().then((movie) => {
            setNowPlaying(movie);
        });
    }, []);

    return (
        <div className="p-4 md:pb-4 pb-24">
            <Container>
                <div className="mb-5">
                    <h1 className="mb-3 lg:text-2xl text-xl font-semibold text-slate-100">Trending</h1>
                    <Slider {...settings}>
                        {trending.map((movie) => (
                            <div key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                                    <Card>
                                        <Card.Img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} />
                                        <Card.Body title={movie.title} year={movie.release_date} ratting={movie.vote_average} />
                                    </Card>
                                </NavLink>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="mb-5">
                    <h1 className="mb-3 lg:text-2xl text-xl font-semibold text-slate-100">Popular Movies</h1>
                    <Slider {...settings}>
                        {popularMovies.map((movie) => (
                            <div key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                                    <Card>
                                        <Card.Img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} />
                                        <Card.Body
                                            title={movie.title || movie.original_name || movie.original_title}
                                            year={movie.release_date}
                                            ratting={movie.vote_average}
                                        />
                                    </Card>
                                </NavLink>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="mb-5">
                    <h1 className="mb-3 lg:text-2xl text-xl font-semibold text-slate-100">Now Playing</h1>
                    <Slider {...settings}>
                        {nowPlaying.map((movie) => (
                            <div key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                                    <Card>
                                        <Card.Img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} />
                                        <Card.Body title={movie.title} year={movie.release_date} ratting={movie.vote_average} />
                                    </Card>
                                </NavLink>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Home;
