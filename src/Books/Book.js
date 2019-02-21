import React, { Component } from 'react'
import Authors from './Authors'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    render() {
        const { book, changeShelf, setLoading } = this.props
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
}

export default Book