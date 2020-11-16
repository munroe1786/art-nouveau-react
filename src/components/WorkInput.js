import React from 'react'
import { connect } from 'react-redux'
import { addWork } from '../actions/addWork'

class WorkInput extends React.Component {
    
    state = {
        title: '',
        date: '',
        image_url: '',
        media: '',
        description: ''
    }
    //this.setState updates the value 
    //event.target.name abstracts it out---refers to name on each input field
    //need brackets evaluates the value before trying to set it as a key---without brackets---will try to set it to a key called event.target.name
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addWork(this.state, this.props.artist.id)
        this.setState({
            title: '',
            date: '',
            image_url: '',
            media: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add a new work by this artist:</h3>
                    <p>
                    <label>Title</label>
                    <input type='text' 
                        name="title" value={this.state.title}
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Date</label>
                    <input type='text' 
                        name="date" 
                        value={this.state.date}
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Image</label>
                    <input type='text' 
                        name="image_url" 
                        value={this.state.image_url}
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Media</label>
                    <input type='text' 
                        name="media" 
                        value={this.state.media}
                        onChange={this.handleChange}/>
                    </p>
                    <p>
                    <label>Description</label>
                    <input type='text'
                        name="description" 
                        value={this.state.description}
                        onChange={this.handleChange}/>
                    </p>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addWork})(WorkInput)

//connect this component so that when we call new transaction function, it dispatches function to our reducer.
//receives props from TransactionContainer---but will need mapDispatch
