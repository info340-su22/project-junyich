import React from 'react';
import {Link} from 'react-router-dom';
export default function AboutUs(props) {

    
    return (
        <div>
            <div className="left">
                <h1>Who We Are?</h1>
            </div>
            <div className="right">
                <Link to={"/main"}><img className="iMental_icon" src="img/imentalPSed.png" alt="icon of iMental" /></Link>
                <div className="container">
                    <div className="introduction">
                        <h2>We are iMental team</h2>
                        <h3>We are here to support your mental wellbeings</h3>
                    </div>
                    <h2>Mission</h2>
                    <p>Some bullshit here</p>
                </div>
            </div>
        </div>
    )
}