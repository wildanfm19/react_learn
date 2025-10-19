import './ImageList.css'
import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({images}) => {
    const renderedimages = images.map((image) =>{
        return <ImageShow image={image} key={image.id} />
    })

  return (
    <div className='image-list'>
        ImagesList : {renderedimages}
    </div>
  )
}

export default ImageList