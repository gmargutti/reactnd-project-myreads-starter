import React from 'react'
import PropTypes from 'prop-types'

//Functional Stateless Component that will provide the Autocomplete functionality to the search input
function AutoComplete(props) {
    const { terms, autoComplete_OnChange } = props
    if(terms.length > 0)
        return (
            <select className={'autoComplete'} value={''} onChange={event => autoComplete_OnChange(event.target.value)} size={5}
            style={{
                position: "absolute",
                width: '100%',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.25em',
                zIndex: '1'
            }}>
                <option disabled value={''}>Select an option</option>
                {terms.map(term => (
                    <option value={term} key={term}>{term}</option>
                ))}
            </select>
        )
    else return ('')
}

AutoComplete.propTypes = {
    terms: PropTypes.array,
    autoComplete_OnChange: PropTypes.func
}

export default AutoComplete