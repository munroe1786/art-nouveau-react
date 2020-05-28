
export default function artistReducer(state = {artists: []}, action) {
    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        default:
            return state
    }
}