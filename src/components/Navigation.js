import React from 'react';

import {Link} from 'react-router-dom';

export default function NavBar(props) {



    return (
        <div className="flex-container">
            <header className="flex-header pb-3">
                <nav>
                    <div className="icon">
                        
                        <Link to={"/main"}>
                            <img className="header-item2" src="img/imentalPSed.png" alt="icon of iMental" />
                        </Link>

                    </div>

                    <div className="nav_dropdown">
                        
                        <button className="dropbtn"><i className="fa fa-bars" aria-label="menu"></i></button>
                        <div className="dropdown-content">
                          
                            <Link to={"/topics"}><i className="fa fa-lightbulb-o"> Topics</i></Link>
                            <Link to={"/survey"}><i className="fa fa-search"> Survey</i></Link>
                            <Link to={"/lifestyle"}><i className="fa fa-calendar"> Lifestyle</i></Link>
                            <Link to={"/books"}><i className="fa fa-book"> Books</i></Link>
                            <Link to={"/about"}><i className="fa fa-users"> About Us</i></Link>
                        
                        </div>
        
                    </div>
                </nav>
                <div>
                    <h1>iMental</h1>
                </div>
            </header>
        </div>
    )
}