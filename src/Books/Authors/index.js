import React from 'react'
import PropTypes from 'prop-types'

function Authors(props) {
    return(
        <div className="book-authors">
            {props.authors ? props.authors.join(', ') : ''}
        </div>
    )
}

Authors.propTypes = {
    authors: PropTypes.array
}

export default Authors