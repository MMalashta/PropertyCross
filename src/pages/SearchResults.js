import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/PropertiesList'
import { loadMoreProperties } from '../actions/search.js'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    const { status, properties } = this.props

    this.state = {
      loading: false,
      isMore: properties.length < status.total
    }

    this.loadMore = this.loadMore.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.properties.length > this.props.properties.length)
      this.setState({
        loading: false,
        isMore: nextProps.properties.length < nextProps.status.total
      })
  }

  loadMore() {
    const { loadMoreProperties, status: { page, term } } = this.props

    this.setState({loading: true})
    loadMoreProperties(term, page + 1)
  }

  render() {
    const { properties, status } = this.props,
      { loading, isMore } = this.state

    return <div className='search-result-form'>
      <span>{`${properties.length} of ${status.total} matches`}</span>
      <PropertiesList properties={properties} />
      {
        isMore ?
          <button onClick={this.loadMore}>
            {loading ? "Loading..." : "Load more..."}
          </button>:
          null
      }
    </div>
  }
}

export default connect(({ properties: { properties, status } }) => ({properties, status}), {
  loadMoreProperties
})(SearchResults)
