import React, { Component } from 'react'
import SearchInput from './SearchInput'
import Books from '../Books'

class Search extends Component {
    state = {
        books: []
    }
    filter_OnChange = (books) => {
        books.map(book => {
            const registered = this.props.registeredBooks.filter((current) => current.id === book.id)[0]
            book.shelf = registered ? registered.shelf : 'none'
            return book
        })
        this.setState({
            books: books
        })
    }
    render() {
        const { setLoading, changeShelf, registeredBooks } = this.props
        return(
            <div className="search-books">
                <SearchInput filter_OnChange={this.filter_OnChange} filteredBooks={this.state.books} setLoading={setLoading} />
                <div className="search-books-results">
                    <Books setLoading={setLoading} changeShelf={changeShelf} books={this.state.books} />
                </div>
          </div>
        )
    }
}

export default Search