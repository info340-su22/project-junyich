import React from 'react';

import { useParams } from 'react-router-dom';

import Book100 from '../data/100Books.json';

export default function BookDetail(props) {
    const bookTitle = useParams().bookTitle;

    const bookData = Book100.filter((aBookObj) => {
        let titleLower = aBookObj.title.toLowerCase();
        let userInLower = bookTitle.toLowerCase();
        return titleLower.includes(userInLower);
    })

    return(
        <div className='container'>
            <div className='row' id='BookDetailRow'>

                <div className='col-6'>
                    <div className='float-right'>
                        <a href={bookData[0].link}>
                            <img className='align-middle' src={bookData[0].imageLink} alt={bookData[0].title} />
                        </a>
                    </div>
                </div>

                <div className='col-6'>
                    <h1 className="font-italic">{bookData[0].title}</h1>
                    <p>{bookData[0].author + ", " + bookData[0].country}</p>
                    <p>{"Published " + bookData[0].year}</p>
                    <p>{"Written in " + bookData[0].language}</p>
                    <p>{"Total Pages: " + bookData[0].pages}</p>
                    <p className='font-weight-light font-italic'>{"Click the image to go to wikipedia"}</p>

                </div>
            </div>
        </div>
    )
}