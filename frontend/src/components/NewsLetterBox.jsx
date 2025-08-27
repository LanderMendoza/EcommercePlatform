import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center py-10 border bg-primary text-secondary'>
        <p className='font-medium text-2xl'>Subscribe now & get  20% off</p>
        <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-white text-primary'>
            <input  className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-tertiary text-white px-10 py-4 cursor-pointer' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox