import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [userName, setUserName] = useState('');  
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://135.181.152.249:8072/Account/login', {
        userName,  
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.data);
        window.location.href = '/';
      } else {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('Error logging in:', error.response || error);
      if (error.response) {
        // Handling different status codes from the server
        switch (error.response.status) {
          case 401: // Unauthorized
            setError('Invalid login credentials. Please check your username and password.');
            break;
          case 404: // Not Found
            setError('Server not found. Please try again later.');
            break;
          default:
            setError('An unexpected error occurred. Please try again.');
        }
      } else {
        setError('Network error or server is down.');
      }
      setIsRegistered(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log in to Exclusive</h2>
        <p className="text-center text-gray-500 mb-6">Enter your details below</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="userName"
              placeholder="Email or phone number"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {isRegistered && (
            <p className="text-red-500 text-sm">
              You are not registered. Please <a href="/register" className="text-blue-500">register</a>.
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
