import React from 'react'
import Authors from './Authors'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

//Functional Stateless Component that will provide a single book for the listing
function Book(props) {
    const { book, changeShelf, setLoading } = props
    //Verify if the backgroundImage property is available. If yes, get its value.
    let backGroundImage = ''
    if(book.imageLinks)
        if(book.imageLinks.smallThumbnail)
            backGroundImage = `url(${book.imageLinks.smallThumbnail})`
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: backGroundImage }}></div>
                <ShelfChanger changeShelf={changeShelf} currentShelf={book.shelf} book={book} setLoading={setLoading} />
            </div>
            <div className="book-title">{book.title}</div>
            <Authors authors={book.authors} />
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    changeShelf: PropTypes.func,
    setLoading: PropTypes.func
}

export default Book