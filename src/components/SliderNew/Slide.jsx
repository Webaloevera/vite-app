import React from 'react'

const Slide = ({ content, width }) => {
  return (
    <div className='slide'
      style={{
        width: `${width}%`,
        backgroundImage: `url('${content}')`,
      }}
    />
  )
}

export default Slide
