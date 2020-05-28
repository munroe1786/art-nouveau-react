
export default function artistReducer(state = {artists: []}, action) {
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        default:
            return state
    }
}

//Reducer returns data from our fetch request. Whatever is returned from the reducer is our new state and will be the state we access in any other component.  We want artists to point to an array that came back from my fetch request, not an empoty array any longer.