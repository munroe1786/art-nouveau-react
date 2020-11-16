import { combineReducers } from 'redux'

const artists = (state = {
    items: [],
    itemsById: {},
    loading: false
}, action) => {
    return state;
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