import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider, addLocaleData } from "react-intl"
import App from './App'
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'
import messages_en from "./translations/en.json"
import messages_es from "./translations/es.json"

const messages = {
    'en': messages_en,
    'es': messages_es
}

addLocaleData([...locale_en, ...locale_es])

function Translation({ language }) {
    return (
        <React.Fragment>
            <IntlProvider locale={language} messages={messages[language]}>
                <App/>
            </IntlProvider>
        </React.Fragment>
    )
}

export default connect(store => store.language)(Translation)
