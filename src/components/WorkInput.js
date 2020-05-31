import React from 'react'
import {connect} from 'react-redux'

class WorkInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <p>
                    <label>Title</label>
                    <input type='text' placeholder='Title'name="name"></input>
                    </p>
                    <p>
                    <label>Date</label>
                    <input type='text' placeholder='Date'name="date"></input>
                    </p>
                    <p>
                    <label>Image</label>
                    <input type='text' placeholder='Image'name="image"></input>
                    </p>
                    <p>
                    <label>Description</label>
                    <input type='text' placeholder='Description'name="description"></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default connect(null, )(WorkInput)

//connect this component so that when we call new transaction function, it dispatches function to our reducer.
//receives props from TransactionContainer---but will need mapDispatch
