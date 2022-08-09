import React, { useState } from 'react';

import NavBar from './Navigation';
import AboutUs from './AboutUs';
import Topics from './Topics';

import {Books, BookWindow} from './Books';

import Lifestyle from './lifestyle';

import Survey from './Survey.js';

import Main from './Main'

function App(props) {
    
    const [selectFeature, setSelectFeature] = useState("main");

    const applySelectFeature = (featureStr) => {
        setSelectFeature(featureStr);
    }

    let renderContent;

    if (selectFeature === "topic") {
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />
                <Topics />
            
            </div>
        )
    } else if (selectFeature === "survey") {
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                <Survey />
            
            </div>
        )
    } else if (selectFeature === "lifestyle") {
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                <Lifestyle />
            
            </div>
        )
    } else if (selectFeature === "book") {
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />
                <Books BookList={props.bookData} />
            
            </div>
        )
    } else if (selectFeature === "aboutus") {
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                <AboutUs applySelect={applySelectFeature} />
            
            </div>
        )
    } else  { //back to main
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />
                <Main />
            
            </div>
        )
    }
    return renderContent;
}

export default App;
