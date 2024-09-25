import React from 'react';

const Wishlist = () => {
  const data = (JSON.parse(localStorage.getItem('LikedProducts')))
  console.log(data);
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {data.map((e, index) => (
        <div key={index} className='max-w-xs w-full p-4 bg-white shadow-lg border border-gray-200'>
          <div className='relative'>
            <img src={`http://135.181.152.249:8072/images/${e.image}`} alt={e.productName} className='w-full h-auto object-cover'/>
            <div className='absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-sm rounded'>-35%</div>
          </div>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-lg font-semibold'>{e.productName}</p>
            
            </div>
            
            <div className='flex justify-between items-center text-lg font-semibold'>
              <p className='text-red-500'>${e.price}</p>
              <p className='text-gray-400 line-through'>$1160</p>
            </div>
            <div className='flex justify-between'>
              <button className='bg-black text-white p-2 rounded'>
               Add To Cart
              </button>
              <button className='bg-black text-white p-2 rounded'>
              Delete
              </button>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Wishlist;
