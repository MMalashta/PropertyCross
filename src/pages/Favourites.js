import React from 'react'
import PropertiesList from '../components/PropertiesList'

const Favourites = ({ properties = [] }) => <div className='favourites-form'>
  <span>Favourites</span>
  {
    properties.length ?
      <PropertiesList properties={properties}/> :
      <span>You have not added any properties to your favourites</span>
  }
</div>

export default Favourites
