import React from 'react'

function SearchBox({searchChange}) {
return (
    <div className='pa2'>
        <input
        className='pa3 ba b--green bg-lightest-blue'
        placeholder='search characters'
        type='search'
        onChange={searchChange}
        />
    </div>
)
}

export default SearchBox