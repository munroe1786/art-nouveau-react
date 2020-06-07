import React from 'react'
import {connect} from 'react-redux'
import { editArtist } from '../actions/editArtist'

class ArtistEdit extends React.Component {

    state = {name: '', date_of_birth: '', date_of_death: '', years_active: '', nationality: ''} //local state, inside component itself, not in redux store, might use global state if re-using forms--same for creation or updating

    //this component will have a form 

    //event will automatically be passed in if nothing is passed into this.handleOnChange

    handleChange = (event) => {
        //debugger;
        this.setState({
            [event.target.name]: event.target.value //brackets evaluate event.target.name to read value of attribute and then sets it as the key - assigns a key in an object that needs to be evaluated first//
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let artist = {...this.state, id: this.props.artist.id}
        this.props.editArtist(artist)
        this.setState({name: '', date_of_birth: '', date_of_death: '', years_active: '', nationality: ''
        })
    }

    //need data to go to db.  point of app is to save created items in db and update the redux store

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <h2>Edit this artist:</h2>
                    <label>Name</label>
                        <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} 
                        />                        
                    </p>
                    <p>
                    <label>Born</label>
                        <input type='text' placeholder='Born' 
                        value={this.state.date_of_birth} name="date_of_birth" 
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Died</label>
                        <input type='text' placeholder='Died' 
                        value={this.state.date_of_death} name="date_of_death" 
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Years Active</label>
                        <input type='text' placeholder='Years Active' value={this.state.years_active} name="years_active" onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Nationality</label>
                        <input type='text' placeholder='Nationality' value={this.state.nationality} name="nationality" onChange={this.handleChange}/>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

ArtistEdit.defaultProps = {
    artists: {}
}

export default connect(null, {editArtist})(ArtistEdit)

//pass null instead of mapStateToProps because this component does not care about previous state
//2nd argument is action creator for addArtist---directly importing it due to thunk setup---