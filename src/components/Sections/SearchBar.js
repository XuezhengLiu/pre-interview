import React from 'react'
import { useState } from 'react'
import '../../css/SearchBar.css'

function SearchBar () {
  const [focused, setFocused] = useState(false)

  const setFocus = () => {
    setFocused(!focused)
  }

  return (
    <div className='searchBar' >
      <form action="#" method="get" className="sForm" onFocus={setFocus} onBlur={setFocus} style={{ outline: focused ? '3px #bfdeff solid ' : '' }}>
        <input type="text" value="" className="sFormInput" placeholder="Search for Items" />
        <button class="searchBtn">
          <img src="https://idirectpromo.24livehost.com/front/img/search.png" alt='' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar