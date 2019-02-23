import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import searchTerms from './SearchTerms'
import * as BooksAPI from '../BooksAPI'
import AutoComplete from './AutoComplete'
import PropTypes from 'prop-types'

//Component that will provide the search functionality and validation
class SearchInput extends Component {
    state = {
        filter: '',
        showAutoComplete: false
    }
    componentDidUpdate() {
        if(this.state.filter !== '')
        new Promise((resolve, reject) => resolve(true))
        .then((res) => {
            this.props.setLoading(res)
        })
        .then(() => {
            //Get books list according to search criteria after setting the 'loading' state
                BooksAPI.search(this.state.filter)
                .then(data => this.props.filter_OnChange(data))
                .then(() => this.props.setLoading(false))
            })
        else
            this.props.filter_OnChange([])
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.filter !== nextState.filter
    }
    //Handles the filter change
    filter_OnChange = (value) => {
        this.setState({
            filter: value,
            showAutoComplete: value ? true : false
        })
    }
    //Handles the autocomplete change, when it has been clicked and a value selected.
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
                    //Show autocomplete component only if the filter has some input
                    this.state.showAutoComplete 
                    ? (<AutoComplete terms={searchTerms.filter(term => term.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))} autoComplete_OnChange={this.autoComplete_OnChange} />)
                    : ''
                }
            </div>
        )
    }
}

SearchInput.propTypes = {
    filter_OnChange: PropTypes.func,
    setLoading: PropTypes.func
}

export default SearchInput