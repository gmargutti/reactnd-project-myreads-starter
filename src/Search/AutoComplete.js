import React from 'react'

function AutoComplete(props) {
    const { terms, autoComplete_OnChange } = props
    return (
        <select className={'autoComplete'} onChange={event => autoComplete_OnChange(event.target.value)} size={5}
        style={{
            position: "absolute",
            width: '100%',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.25em'
        }}>
            {terms.map(term => (
                <option value={term} key={term}>{term}</option>
            ))}
        </select>
    )
}

export default AutoComplete