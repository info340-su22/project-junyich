import React, { useState } from 'react';

function BookCard(props) {
    const bookData = props.aBook;

    const authorAndYearStr = bookData.author + " " + bookData.year;
    return (
        <div className='col-sm-12 col-md-6 col-xl-4'>
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
    
    if (userInput != '') {
        let filtered = displayedBooks.filter((aBookObj) => {
            let titleLower = aBookObj.title.toLowerCase();
            let userInLower = userInput.toLowerCase();
            return titleLower.includes(userInLower);
        })
        displayedBooks = [...filtered];
    } else {
        displayedBooks = [...props.BookList];
    }

    const bookCardArray = displayedBooks.map((theBook) => {
        const card = (
            <BookCard aBook={theBook} key={theBook.title + theBook.author} />
        )
        return card;
    })

    console.log(bookCardArray);

    return (
        
        <section id='BookList'>
            <h2 className='mb-5 text-center p-3'>Books Gallery</h2>
            <BookSearchForm filterFunction={applyFilter} />
            <div className='container'>
                <div className='card-deck align-self-center'>
                    {bookCardArray}
                </div>
            </div>
        </section>
    )
}

export function BookWindow(props) {

    return (
        <section id="bookWindow">
            <h2>Recommended Books for this Week:</h2>
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <a href="https://psychiatry.org/psychiatrists/practice/dsm">
                            <p>DSM-5 (The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition)</p>
                            <img src="img/dsm5_resized.png" width="140" height="150" alt="book of DSM-5" />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://www.barnesandnoble.com/w/the-body-keeps-the-score-bessel-van-der-kolk-md/1117229987;jsessionid=DFCE9BA6372E51A9B8D77054D21DFB49.prodny_store01-atgap01?ean=9780143127741">
                            <p>The Body Keeps the Score</p>
                            <img src="img/body_keeps_score_resized.jpg" width="140" height="150" alt="book of The Body Keeps the Score" />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://www.barnesandnoble.com/w/unmasking-autism-devon-price/1139798113;jsessionid=DFCE9BA6372E51A9B8D77054D21DFB49.prodny_store01-atgap01?ean=9780593235232">
                            <p>Unmasking Autism: Discovering the New Faces of Neurodiversity</p>
                            <img src="img/unmasking_autism_resized.png" width="140" height="150" alt="book of Unmasking Autism: Discovering the New Faces of Neruodiversity" />
                        </a>
                    </div>
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
                        <input type="text" className="form-control" placeholder="Enter the title or author name" id="search"/>
                        
                    </div>
                    <div className='col'>
                        <input type="submit" value = "Submit" className='btn-info' />
                    </div>
                </div>
            </form>
        </div>
    )
}