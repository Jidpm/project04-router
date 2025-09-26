import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white p-8 m-10 shadow-md'>{children}</div>
  )
}

export default Card