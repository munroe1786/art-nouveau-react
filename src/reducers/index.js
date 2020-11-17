import { combineReducers } from 'redux'

import {
    ADD_ARTIST,
    ADD_WORK,
    DELETE_WORK,
    EDIT_ARTIST,
    FETCHING_ARTISTS,
    RECEIVE_ARTISTS
} from '../actions';

const artists = (state = {
    items: [],
    itemsById: {},
    loading: false
}, action) => {
    switch(action.type) {
        case FETCHING_ARTISTS:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_ARTISTS:
            return {
                items: action.payload.map(artist => artist.id),
                itemsById: action.payload.reduce((idMap, artist) => {
                    idMap[artist.id] = artist;
                    return idMap;
                }, {}),
                loading: false
            }
        case ADD_ARTIST:
            return {
                ...state,
                items: state.items.concat(action.payload.id),
                itemsById: {
                    ...state.itemsById,
                    [action.payload.id]: action.payload
                }
            }
        default:
            return state;
    }
};

const works = (state = {
    items: [],
    itemsById: {},
    loading: false
}, action) => {
    return state;
};


const rootReducer = combineReducers({
    artists,
    works
})

export default rootReducer;