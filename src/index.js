import React from 'react';
import ReactDOM from 'react-dom/client';
import './draft.css';
import App from './components/App';
import BookList from './data/BookList.json';
import Book100 from './data/100Books.json';
import {BrowserRouter} from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf-ARtZAymacSdVKBRY6Rn5mEZyNfpN_4",
  authDomain: "imental-4b44b.firebaseapp.com",
  projectId: "imental-4b44b",
  storageBucket: "imental-4b44b.appspot.com",
  messagingSenderId: "690922075605",
  appId: "1:690922075605:web:b2e20ab1964f8144c0f95c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App bookData={Book100} />
  </BrowserRouter>
);



