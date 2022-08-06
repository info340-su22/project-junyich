import React from 'react';

export default function NavBar(props) {
    return (
        <div className="flex-container">
            <header className="flex-header pb-3">
                <nav>
                    <div className="icon">
                        
                        <img className="header-item2" src="img/imentalPSed.png" alt="icon of iMental" />
                        
                    </div>

                    <div className="nav_dropdown">
                        
                        <button className="dropbtn"><i className="fa fa-bars" aria-label="menu"></i></button>
                        <div className="dropdown-content">
                            <a href="topics.html"><i className="fa fa-lightbulb-o"> Topics</i></a>
                            <a href="survey.html"><i className="fa fa-search"> Survey</i></a>
                            <a href="lifestyle.html"><i className="fa fa-calendar"> Lifestyle</i></a>
                            <a href="books.html"><i className="fa fa-book"> Books</i></a>
                            <a href="aboutus.html"><i className="fa fa-users"> About Us</i></a>
                        </div>
        
                    </div>
                </nav>
            </header>
        </div>
    )
}