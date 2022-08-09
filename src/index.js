import React from 'react';
import ReactDOM from 'react-dom/client';
import './draft.css';
import App from './App';
import BookList from './data/BookList.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App bookData={BookList} />
  </React.StrictMode>
);


