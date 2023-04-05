import React from 'react'

export const DisplayImage = ({img, caption}) => {
  return (
    <div>
        <h3>DisplayImage</h3>
        <figure>
            <img src={img} alt={caption} width={150}/>
            <figcaption>{caption}</figcaption>
        </figure>
    </div>
  )
}
