import React from 'react'

const ImgCard = ({url, width, height}) => {
  return (
    <div>
        <h3>Img</h3>
        <img src={url} height={height} width={width}/>
    </div>
  )
}

export default ImgCard