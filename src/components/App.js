import React, { useEffect } from 'react';

import NavBar from './Navigation';
import AboutUs from './AboutUs';
import Topics from './Topics';

import Books from './Books';

import Lifestyle from './lifestyle';

import Survey from './Survey.js';

import Main from './Main'

import {Route, Routes, Navigate} from 'react-router-dom';


function App(props) {
    useEffect(() => {
        document.title = "Main";  
      }, []);
    
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='main' element={<Main />}/>
                <Route path='topics' element={<Topics />}/>
                <Route path='survey' element={<Survey />}/>
                <Route path='lifestyle' element={<Lifestyle />}/>
                <Route path='books' element={<Books BookList={props.bookData} />}/>
                <Route path='about' element={<AboutUs />}/>
                <Route path='*' element={<Navigate to={"main"}/>} />
            </Routes>
        </div>
    );
}

export default App;
