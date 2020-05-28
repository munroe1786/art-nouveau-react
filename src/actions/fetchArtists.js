

export function fetchArtists(action) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists`)
        .then(res => res.json())
        .then(artists => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: artists 
        }))
    }
}
