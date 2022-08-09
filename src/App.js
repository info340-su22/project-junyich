import React, { useState } from 'react';

import NavBar from './Navigation';
import AboutUs from './AboutUs';
import Topics from './Topics';

import {Books, BookWindow} from './Books';

import Lifestyle from './lifestyle';


function App(props) {
    
    const [selectFeature, setSelectFeature] = useState("main");

    const applySelectFeature = (featureStr) => {
        setSelectFeature(featureStr)
    }

    let renderContent = (
        <div>
            <NavBar applySelect={applySelectFeature} />
            <BookWindow />
            {/* rest of main page content */}
            
        </div>
    )

    if (selectFeature === "topic") {
        // only render topic component with navbar
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />
                <Topics />
                {/* topic component here */}
            
            </div>
        )
    } else if (selectFeature === "survey") {
        // do shit
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                {/* survey component here */}
            
            </div>
        )
    } else if (selectFeature === "lifestyle") {
        // do shit
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                <Lifestyle />
            
            </div>
        )
    } else if (selectFeature === "book") {
        // do shit
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

                <AboutUs />
            </div>
        )
    } else { // if back to main
        <div>
            <NavBar applySelect={applySelectFeature} />

            {/* rest of main page content */}
            
        </div>
    }
    return renderContent;
}

export default App;
