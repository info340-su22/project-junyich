import React, { useState } from 'react';

import NavBar from './Navigation.js';
import AboutUs from './AboutUs.js';
import Lifestyle from './lifestyle.js';
import Survey from './Survey.js';

function App() {
    
    const [selectFeature, setSelectFeature] = useState("main");

    const applySelectFeature = (featureStr) => {
        setSelectFeature(featureStr);
    }
    console.log(selectFeature);


    let renderContent = (
        <div>
            <NavBar applySelect={applySelectFeature} />

            {/* rest of main page content */}
            
        </div>
    )

    if (selectFeature === "topic") {
        // only render topic component with navbar
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                {/* topic component here */}
            
            </div>
        )
    } else if (selectFeature === "survey") {
        // do shit
        renderContent = (
            <div>
                <NavBar applySelect={applySelectFeature} />

                <Survey />
            
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

                {/* book component here */}
            
            </div>
        )
    } else if (selectFeature === "aboutus") {
        renderContent = (
            <div>
                {/* <NavBar applySelect={applySelectFeature} /> */}

                <AboutUs applySelect={applySelectFeature} />
            
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
