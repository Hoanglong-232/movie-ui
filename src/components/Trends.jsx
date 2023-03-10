import axios from 'axios';
import React, { useEffect } from 'react';

function Trends() {
    const Api = 'https://api.themoviedb.org/3';
    const TrendsShown = '/trending/all/week';

    const Trends = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: '663c2d1726c0c207cde5bd6924dc1dac',
            },
        });
        console.log(data);
    };
    useEffect(() => {
        Trends();
    }, []);
    return <div>Trends</div>;
}

export default Trends;
