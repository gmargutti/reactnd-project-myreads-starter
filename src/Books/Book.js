import React from 'react'
import Authors from './Authors'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

function Book(props) {
    const { book, changeShelf, setLoading } = props
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
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