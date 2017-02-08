import React, { Component } from 'react'
import InstructionalText from '../components/propertySearch/InstructionalText'
import Header from '../components/propertySearch/Header'

export default class PropertySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {

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
    </div>
  }
}
