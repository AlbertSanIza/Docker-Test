import React from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'

function Translation({ language, languageChanged }) {
    return (
        <div>
            <FormattedMessage id="app.title"/>
            <br/>
            <button onClick={ () => languageChanged('en') }>EN</button>
            <button onClick={ () => languageChanged('es') }>ES</button>
            <b>Current: { language }</b>
            <br/>
            <FormattedDate value={new Date()}/>
        </div>
    )
}

export default Translation
