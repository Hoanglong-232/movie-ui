import React, { Fragment } from 'react';
import { HiSearch } from 'react-icons/hi';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <Fragment>
            <nav className="">
                <div className="nav-options">
                    <h1>REACTFLIX</h1>
                    <span>Movies</span>
                    <span>TvShows</span>
                    <span>Trending</span>
                    <span>Pricing</span>
                </div>
                <input type="text" placeholder="Search Whaterver You Want" />
                <HiSearch />
                <div id="color-switch">
                    <div id="color-switcher-move"></div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
