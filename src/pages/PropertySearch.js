import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Form, Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'
import { search } from '../actions/search.js'
import { routs } from '../constants'
import '../styles/pages/property-search.scss'

class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.goToFaves = this.goToFaves.bind(this)
  }

  goToFaves() {
    this.props.push(routs.FAVOURITES)
  }

  render() {
    return <div className='property-search-form'>
      <Header goToFaves={this.goToFaves}/>
      <InstructionalText/>
      <Form onSubmit={this.props.search}/>
      {
        this.props.mode === 'init' ?
          <RecentSearchesList
            searches={this.props.recentSearches}
            onSearch={this.props.search}
          /> :
          <div/>
      }
    </div>
  }
}

export default connect(({ search: { mode }, recentSearches }) => ({mode, recentSearches}), {
  search,
  push
})(PropertySearch)
