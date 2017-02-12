import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

const PropertyListItem = ({ property, getProperty }) => {
  const getPropertyItem = () => getProperty(property)

  return <Row onClick={getPropertyItem} className="property-list-item">
    <Col md={3}><img src={property.thumb_url}/></Col>
    <Col md={9}>
      <Row>{property.price_formatted}</Row>
      <Row>{property.title}</Row>
    </Col>
  </Row>
}

export default PropertyListItem
