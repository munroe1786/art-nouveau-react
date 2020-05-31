import React from 'react'
import {connect} from 'react-redux'

class WorkInput extends React.Component {

    state = {
        title: '',
        date: '',
        image_url: '',
        media: '',
        description: ''
    }

    render() {
        return (
            <div>
                <form>
                    <p>
                    <label>Title</label>
                    <input type='text' placeholder='Title' name="name" value={this.state.title}></input>
                    </p>
                    <p>
                    <label>Date</label>
                    <input type='text' placeholder='Date'name="date" value={this.state.date}></input>
                    </p>
                    <p>
                    <label>Image</label>
                    <input type='text' placeholder='Image'name="image_url" value={this.state.image_url}></input>
                    </p>
                    <p>
                    <label>Media</label>
                    <input type='text' placeholder='Media'name="media" value={this.state.media}></input>
                    </p>
                    <p>
                    <label>Description</label>
                    <input type='text' placeholder='Description'name="description" value={this.state.description}></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default connect(null, )(WorkInput)

//connect this component so that when we call new transaction function, it dispatches function to our reducer.
//receives props from TransactionContainer---but will need mapDispatch
