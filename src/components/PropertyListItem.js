import React, { Component } from 'react'

const PropertyListItem = ({ property, getProperty }) => {
  const getPropertyItem = () => getProperty(property)

  return <div onClick={getPropertyItem}>
    {property.title}
  </div>
}

export default PropertyListItem
