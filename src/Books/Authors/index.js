import React from 'react'

function Authors(props) {
    return(
        <div className="book-authors">
            {props.authors ? props.authors.join(', ') : ''}
        </div>
    )
}

export default Authors