export const addArtist = (data) => {

    return (dispatch) => {
        fetch(`http://localhost3000/api/vi/artists`, {
            headers: {
                'Content-Type': 'application.json',
                'Accept': 'application.json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}

//data is from state in ArtistInput
//return dispatch 
//thunk allows us to bring dispatch into addArtist function