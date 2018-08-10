import { connect } from 'react-redux'
import { Translation } from 'react-lib'

function changeLanguage(language) {
    return {
        type: 'LANGUAGE_CHANGE',
        language: language
    }
}

export default connect(store => store, {
    changeLanguage
})(Translation)
