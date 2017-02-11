import React from 'react'
import PropertyListItem from './PropertyListItem'

const PropertiesList = ({ properties }) => <div>
  {properties.map((property) => <PropertyListItem property={property} />)}
</div>

export default PropertiesList
