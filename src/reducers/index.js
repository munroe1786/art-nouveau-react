import { combineReducers } from 'redux'
import {
    ADD_ARTIST,
    ADD_WORK,
    DELETE_WORK,
    EDIT_ARTIST,
    FETCH_ARTIST
} from '../actions';

const artists = (state = {
    items: [],
    itemsById: {},
    loading: false
}, action) => {
    switch(action.type) {
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

})

export default rootReducer;