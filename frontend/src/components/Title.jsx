import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-3 items-center mb-3'>
        <p className='w-8 h-[1px] sm:h-[2px] bg-primary'></p>
        <p className='text-primary'>{text1} <span className='text-secondary font-medium bg-tertiary p-2 rounded-xl'>{text2}</span></p>
        <p className='w-8 h-[1px] sm:h-[2px] bg-primary'></p>
    </div>
  )
}

export default Title