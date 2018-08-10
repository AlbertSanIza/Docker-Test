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

const languageState = {
    language: 'en'
}

const language = (state = languageState, action) => {
    switch(action.type) {
        case 'LANGUAGE_CHANGE':
        const { language } = action.payload
        return {
            ...state, language: language
        }
        default:
        return state
    }
}

export default combineReducers({
    char,
    language
})
