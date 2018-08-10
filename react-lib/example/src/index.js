import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { IntlProvider, addLocaleData } from "react-intl"
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'
import reducers from './reducers'
import './index.css'
import App from './App'
import messages_en from "./translations/en.json"
import messages_es from "./translations/es.json"

const store = createStore(reducers)

const messages = {
    'en': messages_en,
    'es': messages_es
}
addLocaleData([...locale_en, ...locale_es])

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale='en'messages={messages['en']}>
            <App/>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)
