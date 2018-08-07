import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cat_image from './cat.jpg'
import styles from './styles.css'

class ExampleComponent extends Component {
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
            <img src={cat_image} alt="logo"/>
            </div>
        )
    }
}

export default ExampleComponent
