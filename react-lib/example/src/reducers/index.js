import { combineReducers } from 'redux'
import Char from '../hero'

const initialState = {
    char: Char,
    searchTerm: ''
}

const char = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_INPUT_CHANGED':
        const { searchTerm } = action.payload
        return {
            ...state, searchTerm: searchTerm, char: searchTerm ? Char.filter(
                char => char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            ) : Char
        }
        default:
        return state
    }
}

const language = (state = {}, action) => {
    switch(action.type) {
        case 'LANGUAGE_CHANGE':
        const { searchTerm } = action.payload
        return {
            ...state, searchTerm: searchTerm, char: searchTerm ? Char.filter(
                char => char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            ) : Char
        }
        default:
        return state
    }
}

export default combineReducers({
    char,
    language
})
