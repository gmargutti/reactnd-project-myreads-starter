import React, { Component } from 'react'
import SearchInput from './SearchInput'

class Search extends Component {
    render() {
        return(
            <div className="search-books">
                <SearchInput />
                <div className="search-books-results">
                <ol className="books-grid"></ol>
                </div>
          </div>
        )
    }
}

export default Search