import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

//Component that will provide the shelves for placing and grouping the books correctly
class Shelves extends Component {
    shelves = [
        {id: 1, name: 'currentlyReading', title: 'Currently Reading'},
        {id: 2, name: 'wantToRead', title: 'Want to Read'},
        {id: 3, name: 'read', title: 'Read'}
    ]
    render() {
        const { books, changeShelf, setLoading } = this.props
        return(
            <div className="list-books-content">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {this.shelves.map(shelf => (
                    <Shelf shelf={shelf} key={shelf.id} books={books.filter(book => book.shelf === shelf.name)} changeShelf={changeShelf} setLoading={setLoading} />
                ))}
                <div className="open-search">
                    <Link to='/search'>
                        <button></button>
                    </Link>
                </div>
           </div>
        )
    }
}

Shelf.propTypes = {
    books: PropTypes.array,
    changeShelf: PropTypes.func,
    setLoading: PropTypes.func
}

export default Shelves