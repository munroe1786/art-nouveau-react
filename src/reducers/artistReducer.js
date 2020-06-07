
export default function artistReducer(state = {artists: []}, action) {
    //debugger;
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        case 'ADD_ARTIST':
            return {...state, artists: [...state.artists, action.payload]}
        case 'ADD_WORK':
            let artists = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
            return {...state, artists: artists}
        case 'DELETE_WORK':
            //debugger;
            let artistsDeleteWork = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
            return {...state, artists: artistsDeleteWork}
        case 'EDIT_ARTIST':
            let artistsEditWork = state.artists.map(artist => {
            if (artist.id === action.payload.id) {
                return action.payload
            } else {
                return artist
            }
        })
        return {...state, artists: artistsEditWork}
        default:
            return state
    }
}

//Reducer returns data from our fetch request. Whatever is returned from the reducer is our new state and will be the state we access in any other component.  We want artists to point to an array that came back from my fetch request, not an empoty array any longer.

//add ...state spread operator so that state is retained if you need to add more key/value pairs later