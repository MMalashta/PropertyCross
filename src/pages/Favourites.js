import React from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/PropertiesList'
import '../styles/pages/favourites.scss'

const Favourites = ({ favourites }) => <div className='favourites-form'>
  <div className="page-title">
    <span className="title">Favourites</span>
  </div>
  {
    favourites.length ?
      <PropertiesList className="favourites-list" properties={favourites}/> :
      <div className="no-favourites-warning">You have not added any properties to your favourites</div>
  }
</div>

export default connect(({ favourites }) => ({favourites}))(Favourites)
