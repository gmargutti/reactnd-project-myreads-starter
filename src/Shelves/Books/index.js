import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

class Books extends Component {
    render() {
        const { books, changeShelf, setLoading } = this.props
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
}

Books.propTypes = {
    books: PropTypes.array
}

export default Books