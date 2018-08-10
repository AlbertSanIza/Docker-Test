import React, { Component } from 'react'
import { Example } from 'react-lib'
import { Heroes, Translation } from './react-lib-redux/'

export default class App extends Component {
  render () {
    return (
      <div>
        <Example text='Modern React component module'/>
        <hr/>
        <Heroes/>
        <hr/>
        <Translation/>
      </div>
    )
  }
}
