import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/PropertiesList'
import { loadMoreProperties } from '../actions/search'
import { Button } from 'react-bootstrap'
import '../styles/pages/search-results.scss'

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
      <div className="page-title">
        <span className="title">{`${properties.length} of ${status.total} matches`}</span>
      </div>
      <PropertiesList className='properties-list' properties={properties} />
      {
        isMore ?
          <Button className='search-result-form pull-right' bsStyle="primary" onClick={this.loadMore}>
            {loading ? "Loading..." : "Load more..."}
          </Button>:
          null
      }
    </div>
  }
}

export default connect(({ properties: { properties, status } }) => ({properties, status}), {
  loadMoreProperties
})(SearchResults)
