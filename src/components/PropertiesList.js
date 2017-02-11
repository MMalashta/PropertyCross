import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyListItem from './PropertyListItem'
import { getSinglePropery } from '../actions/search.js'
import { push } from 'react-router-redux'
import { routs } from '../constants'

class PropertiesList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current) {
      this.props.push(routs.PROPERTY + nextProps.current.id)
    }
  }

  render() {
    return <div>
      {this.props.properties.map((property) =>
        <PropertyListItem property={property} getProperty={this.props.getSinglePropery}/>)}
    </div>
  }
}

export default connect(({ current }) => ({current}), {
  getSinglePropery,
  push
})(PropertiesList)
