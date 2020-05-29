
export default function artistReducer(state = {artists: []}, action) {
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        case 'ADD_ARTIST':
            return {...state, artists: [...state.artists, action.payload]}
            //add ...state spread operator so that state is retained if you need to add more key/value pairs later
        default:
            return state
    }
}

//Reducer returns data from our fetch request. Whatever is returned from the reducer is our new state and will be the state we access in any other component.  We want artists to point to an array that came back from my fetch request, not an empoty array any longer.