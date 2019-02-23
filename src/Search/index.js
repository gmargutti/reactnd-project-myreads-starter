import React, { Component } from 'react'
import SearchInput from './SearchInput'
import Books from '../Books'
import PropTypes from 'prop-types'

//Component that will provide the search functionality to the search page
class Search extends Component {
    state = {
        books: []
    }
    //Update all filtered books, according to the search criteria, to match their shelves
    filter_OnChange = (books) => {
        if(!books.error) {
            books.map(book => {
                const registered = this.props.registeredBooks.filter((current) => current.id === book.id)[0]
                book.shelf = registered ? registered.shelf : 'none'
                return book
            })
            this.setState({
                books: books
            })
        }
        else {
            this.setState({
                books: []
            })
        }
    }
    render() {
        const { setLoading, changeShelf } = this.props
        return(
            <div className="search-books">
                <SearchInput filter_OnChange={this.filter_OnChange} filteredBooks={this.state.books} setLoading={setLoading} />
                <div className="search-books-results">
                    {
                        this.state.books.length === 0
                        ? <h2>No books to show.</h2>  
                        : <Books setLoading={setLoading} changeShelf={changeShelf} books={this.state.books} />
                    }
                </div>
          </div>
        )
    }
}

Search.propTypes = {
    setLoading: PropTypes.func,
    changeShelf: PropTypes.func,
    registeredBooks: PropTypes.array
}

export default Search