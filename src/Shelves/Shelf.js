import React, { Component } from 'react'
import Books from '../Books'
import PropTypes from 'prop-types'


class Shelf extends Component {
    render() {
        const { shelf, books, changeShelf, setLoading } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <Books books={books} changeShelf={changeShelf} setLoading={setLoading} />
            </div>
        )
    }
}

Shelf.propTypes = {
    shelf: PropTypes.object,
    books: PropTypes.array
}

export default Shelf