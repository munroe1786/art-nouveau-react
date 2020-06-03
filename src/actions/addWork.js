export const addWork = (work, artistId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${artistId}/works`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(work)
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'ADD_WORK', payload: artist})
        )
    }
}