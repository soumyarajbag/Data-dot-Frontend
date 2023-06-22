import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-5'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
        <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2'>Want tips & tricks to optimize your flow ?</h1>
       <p>Sign Up to Our Newsletter and stay up to date !</p>
        </div>
       <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder='Enter Email Address' />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-4 text-black hover:text-[#00df9a] hover:bg-white hover:ease-in duration-100">Notify Me</button>
          </div>
          <p>We care About The Protection of your data . Read Our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
       </div>
       
       
      </div>

    </div>
  )
}

export default NewsLetter