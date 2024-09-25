import React, { useState } from 'react'
import {Outlet, Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux'




const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  // const handleSearch = () => {
  //   dispatch(searchProducts(searchTerm));
  //   navigate('/search-results');
  // };


  return (
    <div>
    <div className='flex items-center justify-between px-9 py-5'>
        <div className='flex items-center w-[14%] justify-between'>
            <img src="src/assets/Group 1000004658.png" alt="" />
       <p className='font-rubik-glitch text-2xl'>fastcart</p>
        </div>
      <div className=' flex justify-between w-[28%]'>
        <Link style={{fontFamily:"poppins"}} to="/">Home</Link>
        <Link style={{fontFamily:"poppins"}}  to="/contact">Contact</Link>
        <Link style={{fontFamily:"poppins"}}  to="/about">About</Link>
        <Link style={{fontFamily:"poppins"}}  to="/register">Sign Up</Link>
      </div>
      <div className='flex items-center justify-between w-[35%]'>
      <div className='bg-[#F5F5F5] p-2 rounded-lg font-[poppins] text-sm'>
       <input  value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}  className='bg-transparent w-48' type="text" placeholder='What are you looking for?' />
       <SearchIcon />
       </div>
       <Link to={'/wishlist'}><FavoriteBorderOutlinedIcon/></Link>   
        <Link to="/cart" onClick={() => console.log("Cart clicked!")}>
  <ShoppingCartOutlinedIcon />
</Link>
       <Link to="/login"> <PersonOutlineOutlinedIcon/> </Link>
       </div>
     
    </div>
    <main>
      <Outlet />
      </main>
    </div>
  )
}

export default Layout
