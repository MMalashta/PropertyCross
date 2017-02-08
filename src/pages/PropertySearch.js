import React, { Component } from 'react'
import { Header, InstructionalText, RecentSearchesList } from '../components/propertySearch'

export default class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
        mode: 'init'
    }

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
        this.state.mode === 'init' ?
          <RecentSearchesList /> :
          <div/>
      }
    </div>
  }
}
