import React from 'react'

const Header = ({ goToFaves }) => <div className='property-search-header'>
  <span>PropertyCross</span>
  <button onClick={goToFaves}>Faves</button>
</div>

export default Header
