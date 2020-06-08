import React from 'react'
import Work from './Work'
import {connect} from 'react-redux'
import {deleteWork} from '../actions/deleteWork'

const Works = (props) => {

    //console.log(props.works)
    //debugger;
    //below---add props.works as a check to see if there are props.works---if props.works is not undefined, then the map function will run.
    
    const handleDelete = (work) => {
        debugger;
        props.deleteWork(work.id, work.artist_id)
    }
    
    return (
         <div>
            <h3>Works by this artist:</h3>
            {props.works && props.works.map(work =>
               <Work 
               key={work.id}
               {...work}
               />
             )}
        </div>
    )
}

export default connect(null, {deleteWork})(Works)

//<li key={work.id}>
//                   <p>
//                   {work.title}
//                   </p>
//                   <p>
//                   {work.date}
//                   </p>
//                   <p>
//                    {work.image_url}
//                    </p>
//                    <p>
//                       {work.media}
//                    </p>
//                   <p>
//                   {work.description}
//                   </p>

//<button onClick={() => handleDelete(work)}>Delete</button>