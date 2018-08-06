import React, { Component } from 'react'
import PropTypes from 'prop-types'

import image from './atcat.jpg'
import styles from './styles.css'


export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
        <br/>
        <img src={image} alt="logo"/>
      </div>
    )
  }
}
