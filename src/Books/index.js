import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

function Books(props) {
    const { books, changeShelf, setLoading } = props
    return(
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) => (
                    <Book key={book.id} book={book} changeShelf={changeShelf} currentShelf={book.shelf} setLoading={setLoading} />
                ))}
            </ol>
        </div>
    )
}

Books.propTypes = {
    books: PropTypes.array,
    changeShelf: PropTypes.func,
    setLoading: PropTypes.func
}

export default Books