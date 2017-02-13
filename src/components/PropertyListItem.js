import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const PropertyListItem = ({ property, getProperty }) => {
  const getPropertyItem = () => getProperty(property)

  return <Row onClick={getPropertyItem} className="property-list-item">
    <Col md={3} className="image-wrapper"><img src={property.thumb_url}/></Col>
    <Col md={9} className="description-wrapper">
      <Row>{property.price_formatted}</Row>
      <Row>{property.title.split(', ').slice(0,2).join(', ')}</Row>
    </Col>
  </Row>
}

export default PropertyListItem
