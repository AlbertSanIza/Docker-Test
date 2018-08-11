import { connect } from 'react-redux'
import { Heroes } from 'react-lib'

function searchTermChanged(searchTerm) {
    return {
        type: 'SEARCH_INPUT_CHANGED',
        payload: { searchTerm },
    }
}

export default connect(store => store, {
    searchTermChanged
})(Heroes)
