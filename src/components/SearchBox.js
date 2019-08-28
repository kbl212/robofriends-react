import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  console.log('SearchBox');
  return (
    <input
      aria-label='Search Robots'
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='search robots...'
      onChange={searchChange}
    />
  )
}

export default SearchBox;