import React from 'react';
import Footer from '../../components/Footer';

const Checkout = () => {
  return (
    <div>
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-10 items-center">
       
      <div>
  <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
  <div className="space-y-4 p-6 border border-gray-300 rounded-md shadow-lg">
    <input type="text" placeholder="First name" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Last name" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Street address" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Apartment, floor, etc. (optional)" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Town/City" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Phone number" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <input type="text" placeholder="Email address" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
    <label className="flex items-center space-x-2 mt-4">
      <input type="checkbox" className="form-checkbox" />
      <span>Save this information for faster check-out next time</span>
    </label>
  </div>
</div>
        <div>
          <div className=" p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Your Order</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className='flex items-center'>
                <img src="/src/assets/Gamepad-Cart-Small.png" alt="" />
                <p>LCD Monitor</p>
                </div>
                <span>$650</span>
              </div>
              <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <img src="src/assets/Monitor-Cart-Small.png" alt="" />
                    <p>HI Gamepad</p>
                </div>
                <span>$110</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            <div className="my-4 flex items-center justify-between">
                <div>
              <label className="block">
                <input type="radio" name="payment" className="form-radio" />
                <span className="ml-2">Bank</span>
              </label>
              <label className="block">
                <input type="radio" name="payment" className="form-radio" />
                <span className="ml-2">Cash on delivery</span>
              </label>
              </div>
              <div className='flex'>
                <img src="/src/assets/Bkash.png" alt="" />
                <img src="/src/assets/Visa.png" alt="" />
                <img src="/src/assets/Mastercard.png" alt="" />
                <img src="/src/assets/Nagad.png" alt="" />
              </div>
            </div>

            <div className="space-y-2 flex justify-between">
              <input type="text" placeholder="Coupon Code" className="px-9 py-3 border-[1px] rounded-md" />
              <button className="border-[#DB4444] border-[1px] text-[#DB4444] px-9 py-3 rounded-lg">Apply</button>
            </div>

            <button className=" bg-[#DB4444] text-white px-8 py-4 rounded-lg mt-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className='mt-16'>
      <Footer />
      </div>
    </div>
  );
};

export default Checkout;
