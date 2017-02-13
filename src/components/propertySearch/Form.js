import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap'

class Form extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    const term = this.refs.input.value

    if (term) {
      this.props.onSubmit(term)
    }
  }

  render() {
    return <form className="search-form" onSubmit={this.submit}>
      <Row><input type="text" ref="input"/></Row>
      <Row>
        <Button type="submit">Go</Button>
        <Button>My Location</Button>
      </Row>
    </form>
  }
}

export default Form
