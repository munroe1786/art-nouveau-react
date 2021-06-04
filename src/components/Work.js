import React from 'react'
//import {connect} from 'react-redux'
//import {deleteWork} from '../actions/deleteWork'

const Work = (props) => {
    const {
        title,
        date, 
        image_url,
        media,
        description,
    } = props

    //const handleDelete = (work) => {
    //    debugger;
    //    props.deleteWork(work.id, work.artist_id)
    //}

    return (
        <section>
             <p>
                {title}
             </p>
              <p>
                {date}
             </p>
             <p>
                {image_url}
            </p>
            <p>
                {media}
            </p>
            <p>
                {description}
            </p>
        </section>
    )
}


export default Work;