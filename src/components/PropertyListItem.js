import React, { Component } from 'react'

export default class PropertyListItem extends Component {
  render() {
    return <div>{this.props.property.title}</div>
  }
}
