import React from 'react'

const SliderContainer = props => (
  <div className='slider__container'
    style={{
      transform: `translateX(-${props.translate}%)`,
      transition: `transform ease-out ${props.transition}s`,
      width: `${props.width}%`,
    }}
  >
    {props.children}
  </div>
)

export default SliderContainer
