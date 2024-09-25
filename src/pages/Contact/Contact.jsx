import React from 'react'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div>
       <div className="flex justify-center items-start py-12 px-6 ">
 
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mr-6">
        <div className="flex items-center mb-4">
          <div className="bg-red-500 text-white p-3 rounded-full mr-4">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3 className="text-lg font-semibold">Call To Us</h3>
        </div>
        <p className="text-gray-600 mb-4">We are available 24/7, 7 days a week.</p>
        <p className="text-gray-800 font-semibold mb-8">Phone: +8801611112222</p>
        <hr className="mb-8" />
        <div className="flex items-center mb-4">
          <div className="bg-red-500 text-white p-3 rounded-full mr-4">
            <i className="fas fa-envelope"></i>
          </div>
          <h3 className="text-lg font-semibold">Write To Us</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-gray-800 font-semibold mb-2">Emails: customer@exclusive.com</p>
        <p className="text-gray-800 font-semibold">Emails: support@exclusive.com</p>
      </div>

      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-2 w-full"
            ></textarea>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div className='mt-5'>
      <Footer/>
    </div>
    </div>
  )
}

export default Contact
