import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class Translation extends Component {
    render() {
        return (
            <div>
                <FormattedMessage id="app.title" defaultMessage="__Welcome to React-Intl__"/>
                <br/>
                <button>EN</button>
                <button>ES</button>
            </div>
        )
    }
}

export default Translation
