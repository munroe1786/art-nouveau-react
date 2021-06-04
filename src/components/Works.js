import React from 'react'
import Work from './Work'
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux'
//import { deleteWork } from '../actions/deleteWork'

const Works = ({ works, artist }) => {
    const {
        id,
        name, 
        date_of_birth, 
        date_of_death, 
        years_active, 
        nationality 
    } = artist
    return (
        <div>
            <h3>Works by this artist:</h3>
                {works.map(work =>
                    <Work
                        {...work}
                    />
                
            ) }  
        </div>
    )
}

export default Works;

//return (
//    <div>
//        <h3>Works by this artist:</h3>
//        {props.works && props.works.map(work =>
//           <Work
//           key={work.id}
//           {...work}
//           />
//        )}
//    </div>

//<//div>
//            <h3>Works by this artist:</h3>
// //           {works.map(work =>//
//               <Work
//               {...work}
//               />
//            )}
//            <NavLink to={`/artists/${id}/works/new`}>Add New Work</NavLink>
//        </div>

//console.log(props.works)
    //debugger;
    //below---add props.works as a check to see if there are props.works---if props.works is not undefined, then the map function will run.
    
    //const handleDelete = (work) => {
    //    debugger;
    //    props.deleteWork(work.id, work.artist_id)
    //}