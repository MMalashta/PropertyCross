import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/PropertiesList'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    const { status } = this.props

    this.state = {
      isMore: status.page < status.tatalPages
    }
  }

  render() {
    const { properties, status } = this.props,
      { isMore } = this.state

    return <div className='search-result-form'>
      <span>{`${properties.length} of ${status.total} matches`}</span>
      <PropertiesList properties={properties} />
      {isMore ? <button>Load more ...</button> : null}
    </div>
  }
}

export default connect(({ properties: { properties, status } }) => ({properties, status}))(SearchResults)
