export const ADD_ARTIST = "ADD_ARTIST"
export const ADD_WORK = "ADD_WORK"
export const DELETE_WORK = "DELETE_WORK"
export const EDIT_ARTIST = "EDIT_ARTIST"
export const FETCHING_ARTISTS = "FETCHING_ARTISTS"
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"

export const addArtist = artist => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(artist)
        })
        .then(res => res.json())
        .then(artist => {
            dispatch({
                type: 'ADD_ARTIST', 
                payload: artist
            })
         })
    }
}

export const fetchArtists = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_ARTISTS })
        fetch('http://localhost:3000/api/v1/artists')
        .then(res => res.json())
        .then(artists => {
            dispatch({
            type: RECEIVE_ARTISTS,
            payload: artists 
        })
    })
    }
}

export const fetchArtist = (artistId) => {
    return dispatch => {
        dispatch({ type: FETCHING_ARTISTS })
        return fetch(`http://localhost:3000/api/v1/${artistId}`)
            .then(res => res.json())
            .then(artist => {
                dispatch({
                    type: RECEIVE_ARTISTS,
                    payload: [artist]
                })
            })
    }
}




