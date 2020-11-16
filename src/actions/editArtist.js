export const editArtist = (data) => {
    //debugger;
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'EDIT_ARTIST', payload: artist}))
        //response is string object coming in from the backend, convert it to 
        //json, json version comes into next then as the artist, then dispatch 
        //straight to the reducer--type of add artist and payload of account
        //these .thens keeps application from having to send another fetch request
        //this is an explicit dispatch as opposed to building a separate action creator
    }
}

//data is from state in ArtistInput
//return dispatch 
//thunk allows us to bring dispatch into addArtist function