import React from 'react'
import { Button } from 'react-bootstrap'

const Header = ({ goToFaves }) => <div className='page-title'>
  <span className="title">PropertyCross</span>
  <Button className="fav-button" onClick={goToFaves}>Faves</Button>
</div>

export default Header
