import React from 'react';

export default function AboutUs(props) {
    
    return (
        <div>
            <div className="left">
                <h1>Who We Are?</h1>
            </div>
            <div className="right">
                <a href="#/"><img className="iMental_icon" src="img/imentalPSed.png" alt="icon of iMental" /></a>
                <div className="container">
                    <div className="introduction">
                        <h2>We are iMental team</h2>
                        <h3>We are here to support your mental wellbeings</h3>
                    </div>
                    <div className="form_title">
                        <h2>Get in Touch</h2>
                    </div>
                    <form>
                        <div className="row">
                        <div className="col">
                            <input type="text" className="form-control shadow-sm" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control shadow-sm" placeholder="Last name" />
                        </div>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control shadow-sm" id="inputAddress" placeholder="Email Address" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control shadow-sm" id="message" name="message" rows="6" placeholder="Messages"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}