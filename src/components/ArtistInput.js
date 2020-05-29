import React from 'react'

class ArtistInput extends React.Component {

    //this component will have a form 

    render() {
        return (
            <div>
                <form>
                    <p>
                    <label>Name</label>
                    <input type='text' placeholder='Name'/>
                    </p>
                    <p>
                    <label>Born</label>
                    <input type='text' placeholder='Born'/>
                    </p>
                    <p>
                    <label>Died</label>
                    <input type='text' placeholder='Died'/>
                    </p>
                    <p>
                    <label>Years Active</label>
                    <input type='text' placeholder='Years Active'/>
                    </p>
                    <p>
                    <label>Nationality</label>
                    <input type='text' placeholder='Nationality'/>
                    </p>
                </form>
            </div>
        )
    }
}

export default ArtistInput