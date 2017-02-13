import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ErrorReport, Form, Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'
import { search } from '../actions/search.js'
import { routs, modes } from '../constants'
import '../styles/pages/property-search.scss'

class PropertySearch extends Component {
  constructor(props) {
    super(props)

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
        this.props.mode === modes.INIT ?
          <RecentSearchesList
            searches={this.props.recentSearches}
            onSearch={this.props.search}
          /> : this.props.mode === modes.ERROR ?
            <ErrorReport message={this.props.errorMessage}/>:
            <div/>
      }
    </div>
  }
}

export default connect(({ search: { mode, errorMessage }, recentSearches }) => ({mode, errorMessage, recentSearches}), {
  search,
  push
})(PropertySearch)
