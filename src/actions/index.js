export const FETCHING_ARTISTS = "FETCHING_ARTISTS"
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"
export const ADD_ARTIST = "ADD_ARTIST"
export const FETCHING_WORKS = "FETCHING_WORKS"
export const RECEIVE_WORKS = "RECEIVE_WORKS"
export const ADD_WORK = "ADD_WORK"

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

export const addWork = work => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/works', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
            .then(res => res.json())
            .then(workout => {
                dispatch({
                    type: ADD_WORK,
                    payload: work
                })
            })
    }
}






