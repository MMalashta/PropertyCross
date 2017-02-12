import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../actions/favourites'
import { clearSingleProperty } from '../actions/search'

class PropertyListing extends Component {
  constructor(props) {
    super(props)
    const { current, favourites } = this.props

    this.state = {
      isFav: favourites.some(element => element.lister_url === current.lister_url)
    }

    this.addToFavourites = this.addToFavourites.bind(this)
    this.removeFromFavourites = this.removeFromFavourites.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { favourites: newFavs, current } = nextProps

    if (newFavs.length !== this.props.favourites.length)
      this.setState({
        isFav: newFavs.some(element => element.lister_url === current.lister_url)
      })
  }

  componentWillUnmount() {
    this.props.clearSingleProperty()
  }

  addToFavourites() {
    this.props.addToFavourites(this.props.current)
  }

  removeFromFavourites() {
    this.props.removeFromFavourites(this.props.current.lister_url)
  }

  render() {
    const { isFav } = this.state,
      { current } = this.props

    return <div className='property-listing-form'>
      <span>Property Details</span>
      <div>{current.price_formatted}</div>
      <div>{current.title}</div>
      {
        isFav ?
          <button onClick={this.removeFromFavourites}>-</button> :
          <button onClick={this.addToFavourites}>+</button>
      }
    </div>
  }
}

export default connect(({ current, favourites }) => ({current, favourites}), {
  addToFavourites,
  removeFromFavourites,
  clearSingleProperty
})(PropertyListing)
