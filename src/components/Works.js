import React from 'react'

const Works = (props) => {

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