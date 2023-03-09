import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Container } from './Navbar';
import NoImg from './no-image.png';
import '../Styles/Videos.css';

function Movies() {
    const { toggle, inputValue } = useContext(Container);
    const input = inputValue;
    const [moviesData, setMoviesData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const Api = 'https://api.themoviedb.org/3/discover/movie';
    const Images = 'https://image.tmdb.org/t/p/w500/';

    const MovieCall = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: '663c2d1726c0c207cde5bd6924dc1dac',
                query: input,
            },
        });

        const results = data.data.results;
        setMoviesData(results);
    };

    useEffect(() => {
        MovieCall();
    }, [input]);
    console.log(moviesData);

    return (
        <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
            <div className="movies-container">
                <Fragment>
                    {moviesData.map((movie) => {
                        return (
                            <Fragment>
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                    <AiFillPlayCircle color="green" fontSize={40} id="playIcon" />
                                    <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt="???" />
                                    <h3
                                        id={movie.title.length > 28 ? 'smaller-Text' : ''}
                                        className={toggle ? 'text-Color' : ''}
                                    >
                                        {movie.title}
                                    </h3>
                                </div>
                            </Fragment>
                        );
                    })}
                </Fragment>
            </div>
        </div>
    );
}

export default Movies;
