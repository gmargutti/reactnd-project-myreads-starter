import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Shelves';
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './loading.css'
import './loading-btn.css'
class BooksApp extends React.Component {
  state = {
      books: [],
      loading: true
  }
  componentDidMount() {
      BooksAPI.getAll().then(books => {
          this.setState({
              'books': books,
              loading: false
          })
      })
  }
  //Handler for changing book's shelf. Will remove the current book and re-add it at the end of the list with the correct shelf
  changeShelf = (book) => {
    BooksAPI.update(book, book.shelf).then(() => {
      this.setState(currentState => ({
        books: [...currentState.books.filter(current => current.id !== book.id), book],
        loading: false
      }))
      
    })
  }
  //Handler to set loading state
  setLoading = isLoading => {
    this.setState({
      loading: isLoading
    })
  }
  render() {
    return (
        <div className={"ld-over" + (this.state.loading ? " running" : "")}>
          <div className="list-books">
            <Route exact path='/' render={() => (
              <Shelves books={this.state.books} changeShelf={this.changeShelf} setLoading={this.setLoading} />
            )}>
            </Route>
            <Route path='/search' render={() => (
              <Search setLoading={this.setLoading} changeShelf={this.changeShelf} registeredBooks={this.state.books} />
            )}></Route>
          </div>
          <div className="ld ld-ball ld-flip" style={{fontSize: 48}}></div>
        </div>
    )
  }
}

export default BooksApp
