import React from 'react'
import { connect } from 'react-redux'

const PropertyListing = ({ current }) => <div className='property-listing-form'>
  <span>Property Details</span>
  <div>{current.price_formatted}</div>
  <div>{current.title}</div>
</div>

export default connect(({ current }) => ({current}), {
})(PropertyListing)
