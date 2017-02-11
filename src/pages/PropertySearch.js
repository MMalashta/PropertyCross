import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'
import { search } from '../actions/search.js'
import { routs } from '../constants'

class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.goToFaves = this.goToFaves.bind(this)
    this.search = this.search.bind(this)
  }

  goToFaves() {
    this.props.push(routs.FAVOURITES)
  }

  search() {
    const term = this.refs.input.value

    if (term) {
      this.props.search(term)
    }
  }

  render() {
    return <div className='property-search-form'>
      <Header goToFaves={this.goToFaves}/>
      <InstructionalText/>
      <input type='text' ref='input'/>
      <button onClick={this.search}>Go</button><button>My Location</button>
      {
        this.props.mode === 'init' ?
          <RecentSearchesList searches={this.props.recentSearches}/> :
          <div/>
      }
    </div>
  }
}

export default connect(({ search: { mode, recentSearches } }) => ({mode, recentSearches}), {
  search,
  push
})(PropertySearch)
