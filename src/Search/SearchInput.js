import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import searchTerms from './SearchTerms'
import * as BooksAPI from '../BooksAPI'
import AutoComplete from './AutoComplete'

class SearchInput extends Component {
    state = {
        filter: '',
        showAutoComplete: false
    }
    componentDidUpdate() {
        if(searchTerms.filter(term => term === this.state.filter).length > 0) {
            new Promise((resolve, reject) => resolve(true))
            .then((res) => {
                this.props.setLoading(res)
            })
            .then(() => {
                BooksAPI.search(this.state.filter)
                .then(data => this.props.filter_OnChange(data))
                .then(() => this.props.setLoading(false))
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.filter !== nextState.filter
    }
    filter_OnChange = (value) => {
        this.setState({
            filter: value,
            showAutoComplete: value ? true : false
        })
    }
    autoComplete_OnChange = value => {
        this.setState({
            filter: value,
            showAutoComplete: false
        })
    }
    render() {
        return(
            <div>
                <div className="search-books-bar"
                style={{
                    position: "relative"
                }}>
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" value={this.state.filter} placeholder="Search by title or author" onChange={event => this.filter_OnChange(event.target.value)}/>
                    </div>
                </div>
                {
                    this.state.showAutoComplete 
                    ? (<AutoComplete terms={searchTerms.filter(term => term.includes(this.state.filter))} autoComplete_OnChange={this.autoComplete_OnChange} />)
                    : ''
                }
            </div>
        )
    }
}

export default SearchInput