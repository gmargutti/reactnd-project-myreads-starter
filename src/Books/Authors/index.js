import React from 'react'
import PropTypes from 'prop-types'

//Functional Stateless Component that will provide the authors of the designed book
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