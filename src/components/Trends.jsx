import axios from 'axios';
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Container } from './Navbar';
import NoImg from './no-image.png';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import '../Styles/Videos.css';

function Trends() {
    const Api = 'https://api.themoviedb.org/3';
    const TrendsShown = '/trending/all/week';
    const Images = 'https://image.tmdb.org/t/p/w500/';

    const { toggle } = useContext(Container);
    const [trendArray, setTrendArray] = useState([]);
    const [trendTitle, setTrendTitle] = useState('');
    const [trailer, setTrailer] = useState(true);

    const Trends = async () => {
        const data = await axios.get(`${Api}${TrendsShown}`, {
            params: {
                api_key: '663c2d1726c0c207cde5bd6924dc1dac',
            },
        });
        const results = data.data.results;
        setTrendArray(results);
    };
    useEffect(() => {
        setTimeout(() => {
            Trends();
        }, 100);
    }, []);
    const TrendTitle = (trend) => {
        setTrendTitle(trend.title);
        setTrailer(!trailer);
    };
    return (
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
                <div className="movies-container">
                    {trendArray.map((trend) => {
                        return (
                            <Fragment>
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                    <AiFillPlayCircle
                                        color="#fff"
                                        fontSize={40}
                                        id={trailer ? 'playIcon' : 'hide'}
                                        onClick={() => TrendTitle(trend)}
                                    />
                                    <img
                                        src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg}
                                        onClick={() => TrendTitle(trend)}
                                    />
                                    <h3 id="smaller-Text" className={toggle ? 'mainColor' : 'secondaryColor'}>
                                        {trend.title}
                                    </h3>
                                </div>
                            </Fragment>
                        );
                    })}

                    <AiOutlineClose
                        id={trailer ? 'Nothing' : 'Exit1'}
                        className={toggle ? 'DarkTheme' : 'LightThemeClose'}
                        fontSize={55}
                        cursor={'pointer'}
                        onClick={() => setTrailer(true)}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Trends;
