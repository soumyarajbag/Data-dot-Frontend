import React from 'react'
import {
   FaDribbbleSquare ,
   FaFacebookSquare ,
   FaGithubSquare,
   FaInstagram , 
   FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATA.</h1>
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate minima unde facere eaque rem!</p>
           <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare size={30} className='hover:text-[#00df9a]'/>
            <FaInstagram size={30} className='hover:text-[#00df9a]' />
            <FaTwitterSquare size={30} className='hover:text-[#00df9a]'/>
            <FaGithubSquare size={30} className='hover:text-[#00df9a]'/>
            <FaDribbbleSquare size={30} className='hover:text-[#00df9a]'/>
           </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Analytics</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Marketing</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Commerce</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Insights</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Pricing </li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Documentation</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Guides</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>API Status</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>About</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Blog</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Jobs</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Careers</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Claim</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Policy</li>
                <li className='py-2 text-sm hover:text-[#00df9a] duration-100 cursor-pointer'>Terms</li>
                
            </ul>
        </div>

        </div>
    </div>
  )
}

export default Footer