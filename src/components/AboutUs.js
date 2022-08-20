import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
export default function AboutUs(props) {
    useEffect(() => {
        document.title = "About Us Page";  
      }, []);
    
    return (
        <div>
            <div className="left">
                <h1>Who We Are?</h1>
            </div>
            <div className="right">
                <Link to={"/main"}><img className="iMental_icon" src="img/imentalPSed.png" alt="icon of iMental" /></Link>
                <div className="container">
                    <div className="introduction">
                        <h2>We are the iMental team!</h2>
                        <p>We are here to support your mental wellbeings.</p>
                        <h2>Mission</h2>
                        <p>At iMental, we understand the trouble of accessing mental health resources and
                            information. With so many websites and so much to click on, it is difficult at times
                            to find the right resource. On our website, we have compiled information from credible
                            sources, including the DSM-5, to be concise and readily accessible.
                        </p>
                        <p>We extend our support to individuals suffering from mental health issues, and we
                            prioritize those needs. We hope that with our resources, we can better assist those
                            that do not receive adequate help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}