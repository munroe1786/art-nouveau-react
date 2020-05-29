export const addArtist = (data) => {
    //debugger;
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/artists', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(artist => dispatch({type: 'ADD_ARTIST', payload: artist}))
        //response is string object coming in from the backend, convert it to json, json version comes into next then as the artist, then dispatch straight to the reducer--type of add artist and payload of account
        //these .thens keeps application from having to send another fetch request
    }
}

//data is from state in ArtistInput
//return dispatch 
//thunk allows us to bring dispatch into addArtist function