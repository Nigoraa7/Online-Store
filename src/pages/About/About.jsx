import React from 'react'
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div>
    <div className='font-[poppins] p-9'>
     <p><span className='text-[grey]'>Home/</span>About</p>
     <div className='flex justify-between items-center'>
      <div className='px-3'>
        <p className='font-bold text-4xl py-4'>Our Story</p>
        <p className='text-[15px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p> <br /> <br />
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <img className='w-[48%]' src="/src/assets/Side Image.png" alt="" />
     </div>
   
      <div className='flex justify-between py-20'>
        <div className='text-center border-[1px] border-black w-[20%] h-[200px] pt-4 rounded-lg'>
          <img className='mx-auto' src="/src/assets/Services-4.png" alt="" />
          <p className='py-3 font-bold text-xl'>10.5k </p>
          <p>Sallers active our site</p>
        </div>
        <div className='text-center bg-[#DB4444] border-[1px] border-[#DB4444] text-white w-[20%] h-[200px] pt-4 rounded-lg'>
          <img className='mx-auto' src="/src/assets/Services-5.png" alt="" />
          <p className='py-3 font-bold text-xl'>33k </p>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className='text-center border-[1px] border-black w-[20%] h-[200px] pt-4 rounded-lg'>
          <img className='mx-auto' src="/src/assets/Services-6.png" alt="" />
          <p className='py-3 font-bold text-xl'>45.5k </p>
          <p>Customer active in our site</p>
        </div>
        <div className='text-center border-[1px] border-black w-[20%] h-[200px] pt-4 rounded-lg'>
          <img className='mx-auto' src="/src/assets/Services-7.png" alt="" />
          <p className='py-3 font-bold text-xl'>25k</p>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
    
    <div className='flex justify-between'>
      <div>
        <img className='rounded-3xl' src="/src/assets/Frame 874.png" alt="" />
        <p className='font-bold mt-3'>Tom Cruise</p>
        <p>Founder & Chairman</p>
        <div>
        <a href="#twitter" className="mx-2  hover:text-blue-500"><Twitter /></a>
          <a href="#linkedin" className="mx-2  hover:text-blue-500"><LinkedIn /></a>
          <a href="#instagram" className="mx-2 hover:text-blue-500"><Instagram /></a>
        </div>
      </div>
      <div>
        <img className='rounded-3xl' src="/src/assets/Frame 875.png" alt="" />
        <p className='font-bold mt-3'>Emma Watson</p>
        <p>Managing Director</p>
        <div>
        <a href="#twitter" className="mx-2  hover:text-blue-500"><Twitter /></a>
          <a href="#linkedin" className="mx-2  hover:text-blue-500"><LinkedIn /></a>
          <a href="#instagram" className="mx-2 hover:text-blue-500"><Instagram /></a>
        </div>
      </div>
      <div>
        <img className='rounded-3xl' src="/src/assets/Frame 876.png" alt="" />
        <p className='font-bold mt-3'>Will Smith</p>
        <p>Product Designer</p>
        <div>
        <a href="#twitter" className="mx-2  hover:text-blue-500"><Twitter /></a>
          <a href="#linkedin" className="mx-2  hover:text-blue-500"><LinkedIn /></a>
          <a href="#instagram" className="mx-2 hover:text-blue-500"><Instagram /></a>
        </div>
      </div>
    </div>
    <section className='p-9'>
        <div className='flex justify-between text-center font-[poppins] w-[80%] mx-auto py-10'>
    <div className=''>
        <img className='mx-auto' src="/src/assets/Services.png" alt="" />
        <p className='mt-2'>FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
    </div>
    <div>
        <img className='mx-auto' src="/src/assets/Services-2.png" alt="" />
        <p className='mt-2'>24/7 CUSTOMER SERVICE</p>
        <p>Friendly 24/7 customer support</p>
    </div>
    <div>
        <img className='mx-auto' src="/src/assets/Services-3.png" alt="" />
        <p className='mt-2'>MONEY BACK GUARANTEE</p>
        <p>We reurn money within 30 days</p>
    </div>
    </div>
        </section>  
       
    </div>
    <Footer/>
    </div>
  )
}

export default About
