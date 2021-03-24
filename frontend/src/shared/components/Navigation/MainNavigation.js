import React from 'react';
import { Link } from 'react-router-dom'
import './MainNavigation.css'

import './MainHeader'
import MainHeader from './MainHeader';

const MainNavigation = props => {
    <MainHeader>
        <button className="main-navigation_menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="Navigation_title">
            <Link to="/">Your Places</Link> 
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
}