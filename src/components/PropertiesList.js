import React from 'react'
import PropertyListItem from './PropertyListItem'

const PropertiesList = ({properties}) => <div>
  <span>List</span>
  {properties.map(() => <PropertyListItem/>)}
</div>

export default PropertiesList
