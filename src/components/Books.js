import React, { useState } from 'react';

function BookCard(props) {
    const bookData = props.aBook;

    const authorAndYearStr = bookData.author + " " + bookData.year;
    return (
        <div className='col-sm-12 col-md-6 col-xl-4' id="BookCard">
            <div className='card m-3' key={bookData.title}>
                <a href={bookData.link}>
                    <img className='card-img-top align-middle' src={bookData.imageLink} alt={bookData.title} />
                    <div className="card-body">
                        <h3 className="card-title font-italic">{bookData.title}</h3>
                        <p className="card-text">{authorAndYearStr}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export function Books(props) {
    const [userInput, setUserInput] = useState('');

    const applyFilter = (userInputStr) => {
        setUserInput(userInputStr);
    } 

    let displayedBooks = [...props.BookList];
    let notFoundBook;
    if (userInput !== '') {
        let filtered = displayedBooks.filter((aBookObj) => {
            let titleLower = aBookObj.title.toLowerCase();
            let userInLower = userInput.toLowerCase();
            return titleLower.includes(userInLower);
        })
        displayedBooks = [...filtered];
        if (displayedBooks.length > 0) {
            notFoundBook = null;
        } else {
            notFoundBook = (
                <p className='font-weight-bold text-danger'> Sorry, can't find the book!</p>
            )
        }
    } else {
        displayedBooks = [...props.BookList];
    }

    const bookCardArray = displayedBooks.map((theBook) => {
        const card = (
            <BookCard aBook={theBook} key={theBook.title + theBook.author} />
        )
        return card;
    })

    return (
        
        <section id='BookList'>
            <h2 className='mb-5 text-center p-3'>Book Gallery</h2>
            <BookSearchForm filterFunction={applyFilter} />
            <div className='container ml-0'>
                <div className='card-deck align-self-center'>
                    {notFoundBook}
                    {bookCardArray}
                </div>
            </div>
        </section>
    )
}

function BookSearchForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.filterFunction(event.target.search.value);

    }

    return(
        <div id="booksearch">
            <form onSubmit={handleSubmit}>
                <div className='form-row ml-3  align-items-center'>
                
                    <div className='col'>
                        <label htmlFor="search" className="font-weight-light font-italic">Search for a Book among our library</label>
                        <input type="text" className="form-control" placeholder="Enter the title here." id="search"/>
                        
                    </div>
                    <div className='col'>
                        <input type="submit" value = "Submit" className='btn-info' />
                    </div>
                </div>
            </form>
        </div>
    )
}