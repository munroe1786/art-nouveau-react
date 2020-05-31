import React from 'react'

const Works = (props) => {
    //debugger
    //below---add props.works as a check to see if there are props.works---if props.works is not undefined, then the map function will run.
    return (
        <div>
            {props.works && props.works.map(work =>
               <li key={work.id}>
                   <p>
                   {work.title}
                   </p>
                   <p>
                   {work.date}
                   </p>
                   <p>
                       {work.image_url}
                    </p>
                   <p>
                   {work.description}
                   </p>
               </li>    
            )}
        </div>
    )
}

export default Works