import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCard, getProductById } from '../../../api/CardApi';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Footer from '../../components/Footer';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Info = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id)); 
    dispatch(GetCard())
  }, [dispatch, id]);

  const { product, loading, error } = useSelector((state) => state.products);
  const {cards,isLoading} = useSelector((state)=>state.cards)
 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
    <div className="container mx-auto p-8 w-[100%]">
      <div className="flex flex-col lg:flex-row gap-8">
       
      <div className="flex gap-8">
  <div className="flex flex-col gap-4 w-1/5">
  {product.images.map((imgObj, index) => (
  <img
    key={imgObj.id || index} 
    className="border rounded-lg"
    src={`http://135.181.152.249:8072/images/${imgObj.images}`} 
    alt={`Thumbnail ${index}`}
  />
))}

{product.images.map((imgObj, index) => (
  <img
    key={imgObj.id || index} 
    className="border rounded-lg"
    src={`http://135.181.152.249:8072/images/${imgObj.images}`} 
    alt={`Thumbnail ${index}`}
  />
))}
       {product.images.map((imgObj, index) => (
      <img
        key={imgObj.id} 
        className="border rounded-lg"
        src={`http://135.181.152.249:8072/images/${imgObj.images}`} 
        alt={`Thumbnail ${index}`}
      />
    ))}
  </div>

  <div className="w-4/5">
    <img
      className="border rounded-lg w-full"
      src={`http://135.181.152.249:8072/images/${product.images[0]?.images}`} 
      alt={product.productName}
    />
  </div>
</div>


        
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500">
              ★★★★☆ 
            </div>
            <span className="ml-2 text-gray-600">(150 Reviews)</span>
            <span className="ml-4 text-green-500">In Stock</span>
          </div>
          <p className="text-3xl font-bold mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="font-semibold mb-2">Colours:</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border-2 border-gray-300"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer border-2 border-gray-300"></div>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-4">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="px-4 py-2 border rounded-lg">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button className="px-4 py-2 border rounded-lg">-</button>
            <span className="text-xl">2</span>
            <button className="px-4 py-2 border rounded-lg">+</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Buy Now</button>
          </div>

<div>
          <div className="mb-6 flex items-center font-[poppins] justify-between border-black border-[1px]">
            <LocalShippingOutlinedIcon style={{fontSize:"50px"}}/>
            <div>
            <p>Free Delivery</p>
            <p className="text-[11px]">Enter your postal code for Delivery Availability</p>
            </div>
          </div>

          <div className='flex items-center font-[poppins] border-black border-[1px]'>
              <AutorenewOutlinedIcon style={{fontSize:"50px"}}/>
            <div>
            <p>Return Delivery</p>
            <p className="text-[11px]">Free 30 Days Delivery Returns.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <section className='p-9'>
    <div>
        <div className='flex items-center'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>Related Item</p>
        </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 py-8 font-[poppins]">
  {cards && cards.slice(0, 4).map((product) => (
    <div key={product.id} className='mx-auto'> 
      <div
        className="border p-4 bg-no-repeat bg-cover h-60 w-60 bg-opacity-100"
        style={{ backgroundImage: `url('http://135.181.152.249:8072/images/${product.image}')` }}
      >
        <div className='w-12 h-7 rounded-md bg-[#DB4444]'>
          <div className='flex justify-between w-[100%]'>  
            <p>-40%</p>
          </div>
        </div>
      </div>

      <p>{product.productName}</p>
      <p>{product.price}</p>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>
    </div>
  ))}
</div>

        </section>
        <Footer/>
    </div>
  );
};

export default Info;
