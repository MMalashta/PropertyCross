import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyListItem from './PropertyListItem'
import { getSingleProperty } from '../actions/search'
import { push } from 'react-router-redux'
import { routs } from '../constants'
import '../styles/components/properties-list.scss'

class PropertiesList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current) {
      this.props.push(routs.PROPERTY + nextProps.current.id)
    }
  }

  render() {
    return <div className={this.props.className}>
      {this.props.properties.map((property) =>
        <PropertyListItem
          property={property}
          getProperty={this.props.getSingleProperty}
          key={property.lister_url}
        />
      )}
    </div>
  }
}

export default connect(({ current }) => ({current}), {
  getSingleProperty,
  push
})(PropertiesList)
