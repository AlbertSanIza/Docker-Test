import { connect } from 'react-redux'
import { Translation } from 'react-lib'

function languageChanged(language) {
    return {
        type: 'LANGUAGE_CHANGE',
        payload: { language }
    }
}

export default connect(store => store.language, {
    languageChanged
})(Translation)
