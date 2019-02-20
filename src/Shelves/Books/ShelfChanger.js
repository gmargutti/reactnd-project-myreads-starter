import React from 'react'

function ShelfChanger(props) {
    const { changeShelf, currentShelf, book, setLoading } = props
    const handleChange = (value) => {
        new Promise((resolve, reject) => {
            resolve(true)
        }).then(result => {
            setLoading(result)
        }).then(() => {
            book.shelf = value
            changeShelf(book)

        })
    }
    return(
        <div className="book-shelf-changer">
            <select onChange={event => handleChange(event.target.value)} value={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger