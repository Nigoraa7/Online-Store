import { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    userName: '', phoneNumber: '', email: '', password: '', confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function gotoLogin() {
    window.location.href = '/login';
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://135.181.152.249:8072/Account/register', formData);
      window.location.href = '/login';
    } catch (error) {
      if (error.response) {
        
        console.log(error.response.data); 
        setError(error.response.data);
      } else {
        setError(error.message);
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create an account</h2>
        <p className="text-center text-gray-500 mb-6">Enter your details below</p>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
      
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
         {error && (
  <p className="text-red-500">
    {typeof error === 'string' ? error : error.message || 'An error occurred'}
  </p>
)}


          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Create Account
          </button>
         
        </form>

        <div className="text-center mt-6 text-gray-500">
          Already have an account? <button className="text-blue-500" onClick={gotoLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
