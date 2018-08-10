import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

function Translation({ languageChanged }) {
    return (
        <div>
            <FormattedMessage id="app.title"/>
            <br/>
            <button onClick={e => languageChanged('en') }>EN</button>
            <button onClick={e => languageChanged('es') }>ES</button>
        </div>
    )
}

export default Translation
