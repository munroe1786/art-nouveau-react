import React from 'react'

class ArtistInput extends React.Component {

    state = {name: '', date_of_birth: '', date_of_death: '', years_active: '', nationality: ''} //local state, inside component itself, not in redux store, might use global state if re-using forms--same for creation or updating

    //this component will have a form 

    render() {
        return (
            <div>
                <form>
                    <p>
                    <label>Name</label>
                    <input type='text' placeholder='Name' value={this.state.name}/>
                    </p>
                    <p>
                    <label>Born</label>
                    <input type='text' placeholder='Born' value={this.state.date_of_birth}/>
                    </p>
                    <p>
                    <label>Died</label>
                    <input type='text' placeholder='Died' value={this.state.date_of_death}/>
                    </p>
                    <p>
                    <label>Years Active</label>
                    <input type='text' placeholder='Years Active' value={this.state.years_active}/>
                    </p>
                    <p>
                    <label>Nationality</label>
                    <input type='text' placeholder='Nationality' value={this.state.nationality}/>
                    </p>
                </form>
            </div>
        )
    }
}

export default ArtistInput