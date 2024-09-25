import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';


const Footer = () => {
  return (
    <div className='bg-black '>
    <div className='flex justify-between p-9 text-white font-[poppins]'>
      <div>
        <p className='font-bold text-xl mt-3'>Exclusive</p>
        <ul>
            <li className='mt-3'>Subscribe</li>
            <li className='mt-3'>Get 10% off your first order</li>
            <li className='mt-3'>
            <div className='p-2 rounded-lg font-[poppins] text-sm border-white border-[1px]'>
       <input className='bg-transparent w-48 text-[#FAFAFA]' type="text" placeholder='What are you looking for?' />
        <SendOutlinedIcon/>
       </div>
            </li>
        </ul>
      </div>
      <div>
        <p className='font-bold text-xl mt-3'>Support</p>
        <ul>
            <li className='mt-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
            <li className='mt-3'>exclusive@gmail.com</li>
            <li className='mt-3'>+88015-88888-9999</li>
        </ul>
      </div>
      <div>
      <p className='font-bold text-xl mt-3'>Account</p>
      <ul>
      <li className='mt-3'>My Account</li>
      <li className='mt-3'>Cart</li>
      <li className='mt-3'>Wishlist</li>
      <li className='mt-3'>Shop</li>
      </ul>
      </div>
      <div>
      <p className='font-bold text-xl mt-3'>Quick Link</p>
      <ul>
      <li className='mt-3'>Privacy Policy</li>
      <li className='mt-3'>Terms Of Use</li>
      <li className='mt-3'>FAQ</li>
      <li className='mt-3'>Contact</li>
      </ul>
      </div>
      <div>
      <p className='font-bold text-xl mt-3'>Social </p>
      <div className='mt-3'>
      <a href="#facebook" className="mx-2 text-white hover:text-blue-500"><Facebook /></a>
          <a href="#twitter" className="mx-2 text-white hover:text-blue-500"><Twitter /></a>
          <a href="#linkedin" className="mx-2 text-white hover:text-blue-500"><LinkedIn /></a>
          <a href="#instagram" className="mx-2 text-white hover:text-blue-500"><Instagram /></a>
      </div>
      </div>
    </div>
    <p className='text-[gray] text-center pb-7 font-[poppins]'> Copyright Rimel 2022. All right reserved</p>
    </div>
  )
}

export default Footer
