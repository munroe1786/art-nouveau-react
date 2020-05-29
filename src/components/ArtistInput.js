import React from 'react'

class ArtistInput extends React.Component {

    state = {name: '', date_of_birth: '', date_of_death: '', years_active: '', nationality: ''} //local state, inside component itself, not in redux store, might use global state if re-using forms--same for creation or updating

    //this component will have a form 

    //event will automatically be passed in if nothing is passed into this.handleOnChange

    handleOnChange = (event) => {
        //debugger;
        this.setState({
            [event.target.name]: event.target.value //brackets evaluate event.target.name to read value of attribute and then sets it as the key - assigns a key in an object that needs to be evaluated first//
        })

    }

    handleSubmit = () => {
        
    }

    //need data to go to db.  point of app is to save created items in db and updating redux store

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label>Name</label>
                        <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleOnChange} 
                        />                        
                    </p>
                    <p>
                    <label>Born</label>
                        <input type='text' placeholder='Born' value={this.state.date_of_birth} name="date_of_birth" onChange={this.handleOnChange}/>
                    </p>
                    <p>
                    <label>Died</label>
                        <input type='text' placeholder='Died' value={this.state.date_of_death} name="date_of_death" onChange={this.handleOnChange}/>
                    </p>
                    <p>
                    <label>Years Active</label>
                        <input type='text' placeholder='Years Active' value={this.state.years_active} name="years_active" onChange={this.handleOnChange}/>
                    </p>
                    <p>
                    <label>Nationality</label>
                        <input type='text' placeholder='Nationality' value={this.state.nationality} name="nationality" onChange={this.handleOnChange}/>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

export default ArtistInput