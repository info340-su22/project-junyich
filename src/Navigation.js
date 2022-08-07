import React from 'react';

export default function NavBar(props) {



    const handleClick = (event) => {
        event.preventDefault();
        props.applySelect(event.currentTarget.name)
    }

    // console.log(selectFeature);


    return (
        <div className="flex-container">
            <header className="flex-header pb-3">
                <nav>
                    <div className="icon">
                        
                        <a href='#/' onClick={handleClick} name="main">
                            <img className="header-item2" src="img/imentalPSed.png" alt="icon of iMental" />
                        </a>

                    </div>

                    <div className="nav_dropdown">
                        
                        <button className="dropbtn"><i className="fa fa-bars" aria-label="menu"></i></button>
                        <div className="dropdown-content">
                            <a href="#/" onClick={handleClick} name="topic"><i className="fa fa-lightbulb-o"> Topics</i></a>
                            <a href="#/" onClick={handleClick} name="survey"><i className="fa fa-search"> Survey</i></a>
                            <a href="#/" onClick={handleClick} name="lifestyle"><i className="fa fa-calendar"> Lifestyle</i></a>
                            <a href="#/" onClick={handleClick} name="book"><i className="fa fa-book"> Books</i></a>
                            <a href="#/" onClick={handleClick} name="aboutus"><i className="fa fa-users"> About Us</i></a>
                        </div>
        
                    </div>
                </nav>
            </header>
        </div>
    )
}