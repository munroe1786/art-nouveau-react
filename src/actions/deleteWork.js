export const deleteWork = (workId, artistId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/artists/${artistId}/works/${workId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'DELETE_WORK', payload: artist}))
    }

}