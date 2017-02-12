import React from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/PropertiesList'

const Favourites = ({ favourites }) => <div className='favourites-form'>
  <span>Favourites</span>
  {
    favourites.length ?
      <PropertiesList properties={favourites}/> :
      <span>You have not added any properties to your favourites</span>
  }
</div>

export default connect(({ favourites }) => ({favourites}))(Favourites)
