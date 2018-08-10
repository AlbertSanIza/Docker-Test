import React from 'react'
import { FormattedMessage } from 'react-intl'

function Translation({ language, languageChanged }) {
    return (
        <div>
            <FormattedMessage id="app.title"/>
            <br/>
            <button onClick={ () => languageChanged('en') }>EN</button>
            <button onClick={ () => languageChanged('es') }>ES</button>
            <b>Current: { language }</b>
        </div>
    )
}

export default Translation
