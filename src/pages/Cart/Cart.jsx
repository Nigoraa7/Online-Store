import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/Footer';
import {calculateSubtotal, deleteFromCart, getCart, deleteAllFromCart, minusQuantity,plusQuantity} from '../../../api/CardApi'; 
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useNavigate } from 'react-router-dom';






const Cart = () => {
const dispatch = useDispatch();
const navigate = useNavigate(); 
  

  useEffect(() =>
{
    dispatch(getCart())
} , [])
const cartItems = useSelector((state) => state.cart.items); 


console.log(cartItems)
const {items} = useSelector(state => state.cart)



useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(calculateSubtotal(cartItems)); 
    }
  }, [dispatch, cartItems]);

  const subtotal = useSelector((state=>state.cart.subtotal))


  if (cartItems.length === 0) {
    return (
      <div>
        <div className='text-center'>
          <p className='font-[poppins] font-bold text-[50px] text-[#DB4444] mt-20'>Cart is empty</p>
          <img className='mx-auto w-[30%] mt-14 ' src="/src/assets/empty.png" alt="" />
        </div>
        <div className='pt-28'><Footer /></div>
      </div>
    );
  }


// console.log('object')

  const handleRemoveItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleRemoveAllItems = () => {
    dispatch(deleteAllFromCart());
  };

  const goToCheckout = ()=>{
    navigate('/checkout')
  }


  return (
    <div>
      <div className="container mx-auto p-8 font-[poppins]">
        <p className='text-[grey]'>Home / <span className='text-black'>Cart</span></p>
        <table className="w-full text-center border-collapse shadow-lg rounded-lg overflow-hidden mt-6">
  <thead>
    <tr className="bg-gray-200 text-gray-700 border-b-2 border-gray-300">
      <th className="py-4 px-6">Product</th>
      <th className="py-4 px-6">Price</th>
      <th className="py-4 px-6">Quantity</th>
      <th className="py-4 px-6">Subtotal</th>
      <th className="py-4 px-6">Actions</th>
    </tr>
  </thead>
  <tbody>
    {cartItems &&
      cartItems.map((item) => (
        <tr
          key={item.id}
          className="border-b hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          <td className="py-3 px-6 flex items-center">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full ml-2"
              src={import.meta.env.VITE_APP_FILE_URL + item.product.image}
              alt=""
            />
            <p className="ml-4">{item.product.productName}</p>
          </td>
          <td className="py-3 px-6 text-gray-600">{item.product.price}</td>
          <td className="py-3 px-6 text-gray-600">
  <button onClick={() => dispatch(minusQuantity(item.id))} className="px-2">-</button>
  <span className="mx-2">{item.quantity}</span>
  <button onClick={() => dispatch(plusQuantity(item.id))} className="px-2">+</button>
</td>

          <td className="py-3 px-6 text-gray-600">
            {(item.product.price * item.product.quantity).toFixed(2)}
          </td>
          <td className="py-3 px-6">
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              <CancelPresentationIcon style={{ fontSize: "30px" }} />
            </button>
          </td>
        </tr>
      ))}
  </tbody>
</table>

        <div className='flex justify-between items-center'>
          <button className="border-black border-[1px] rounded-md p-3 mt-4">Return To Shop</button>
          <div>
            <button className="p-3 mt-4 border-black border-[1px] rounded-md mr-3">Update Cart</button>
            <button  onClick={handleRemoveAllItems} className='p-3 mt-4 border-[red] border-[1px] rounded-md text-[#DB4444]'>Remove all</button>
          </div>
        </div>
        <div className='flex justify-between rounded-md mt-20'>
          <div>
            <input className='border-[1px] border-[black] py-2 px-4 rounded-md' type="text" placeholder='Coupon Code' />
            <button className='p-2 mt-4 border-[red] border-[1px] rounded-md text-[red] ml-3'>Apply</button>
          </div>
          <div className='border-[black] py-8 px-16 border-[1px]'>
            <p className='font-bold text-xl mt-3'>Cart Total</p>
            <div>
              <p className='mt-3'>Subtotal:{subtotal.toFixed(2)}</p>
              <p className='mt-3'>Shipping: Free</p>
            </div>
            <hr />
            <div>
              <p className='font-bold mt-3'>Total:{subtotal.toFixed(2)}</p>
            </div>
            <button onClick={goToCheckout} className='border-[1px] bg-[#DB4444] text-white rounded-md p-3 mt-3'>Proceed to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
