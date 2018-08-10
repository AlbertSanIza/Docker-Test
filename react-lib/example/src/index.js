import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Translation from './translation'
import reducers from './reducers/'
import './index.css'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Translation/>
    </Provider>,
    document.getElementById('root')
)
