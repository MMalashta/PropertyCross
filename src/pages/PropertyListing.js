import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../actions/favourites'
import { clearSingleProperty } from '../actions/search'
import { Button } from 'react-bootstrap'

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
      <div className="page-title">
        <span className="title">Property Details</span>
        {
          isFav ?
            <Button className="fav-button" onClick={this.removeFromFavourites}>-</Button> :
            <Button className="fav-button" onClick={this.addToFavourites}>+</Button>
        }
      </div>
      <div>{current.price_formatted}</div>
      <div>{current.title}</div>
    </div>
  }
}

export default connect(({ current, favourites }) => ({current, favourites}), {
  addToFavourites,
  removeFromFavourites,
  clearSingleProperty
})(PropertyListing)
