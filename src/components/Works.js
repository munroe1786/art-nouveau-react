import React from 'react'

const Works = (props) => {

    //console.log(props.works)
    //debugger;
    //below---add props.works as a check to see if there are props.works---if props.works is not undefined, then the map function will run.
    
    const handleDelete = () => {

        
    }


    
    return (
    
        <div>
            <h3>Works by this artist:</h3>
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
                       {work.media}
                    </p>
                   <p>
                   {work.description}
                   </p>
                   <button onClick={handleDelete}>Delete</button>
               </li>    
            )}
        </div>
    )
}

export default Works