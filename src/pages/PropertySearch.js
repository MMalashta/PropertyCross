import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'

class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.goToFaves = this.goToFaves.bind(this)
  }

  goToFaves() {
    console.log('Privet', this)
    //this.context.router.push('/favourites')
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

export default connect(({ mode }) => ({mode}))(PropertySearch)
