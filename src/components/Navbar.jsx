import React, { Fragment, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import '../Styles/Navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(true);

    return (
        <Fragment>
            <nav className="">
                <div className="nav-options">
                    <h1 id={toggle ? '' : 'heading'}>REACTFILM</h1>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>TvShows</span>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                    <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                </div>

                <div className="input-group">
                    <input type="text" placeholder="Search Whaterver You Want" />
                    <HiSearch fontSize={21} color="red" id="search" />
                    <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
