import React from 'react'

const Work = (props) => {
    const {
        title,
        date, 
        image_url,
        media,
        description,
    } = props

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


export default Work