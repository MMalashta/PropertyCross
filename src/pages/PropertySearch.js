import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'
import store from '../store'
import { push } from 'react-router-redux'

class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.goToFaves = this.goToFaves.bind(this)
  }

  goToFaves() {
    console.log('Privet', this)
    store.dispatch(push('/favourites'))
  }

  render() {
    return <div className='property-search-form'>
      <Header goToFaves={this.goToFaves}/>
      <InstructionalText/>
      <input type='text'/>
      <button>Go</button><button>My Location</button>
      {
        this.props.mode === 'init' ?
          <RecentSearchesList /> :
          <div/>
      }
    </div>
  }
}

export default connect(({ search: { mode } }) => ({mode}))(PropertySearch)
