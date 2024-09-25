import React, {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/App.css';
import { Pagination } from 'swiper/modules';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { GetCard, getCategoryById } from '../../../api/CardApi';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import  {addToCart}  from '../../../api/CardApi';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()


    const [massiv,setMasiv] = useState([])

    function addToWishList(el)
    {
      console.log(el)
      massiv.push(el)
      setMasiv(massiv)
      localStorage.setItem("LikedProducts" , JSON.stringify(massiv))
      // console.log(JSON.parse(localStorage.getItem('LikedProducts')))
    }



  //   useEffect(() =>
  // {
  //   localStorage.setItem("LikedProducts" , JSON.stringify(massiv))
  // } , [massiv])



   const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  
    useEffect(() => {
      if (id) {
        dispatch(getCategoryById(id));
      }
        dispatch(GetCard())
      }, [])
      
    const {cards,isLoading} = useSelector((state)=>state.cards)
    if (isLoading) {
        return <div>Loading...</div>
      }

      const goToAllProducts = () => {
        navigate('/all-products'); 
    };
   

    const handleCategoryClick = (id) => {
      navigate(`/all-products/${id}`);
    };

  
    // useEffect(() => {
    //   dispatch(fetchProducts());
    // }, [dispatch]);

    // const { products } = useSelector((state) => state.wishlist);

    // const handleAddToWishlist = (product) => {
    //   dispatch(addToWishlist(product)); 
    // };
  

  return (
    <div>
      <section className='p-9 font-[poppins]'>
        <div className="main-container">
        <div className="categories space-y-1" data-aos="fade-right">
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1">Woman’s Fashion</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1">Men’s Fashion</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1"
    onClick={() => handleCategoryClick(12)}>Electronics</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1"
    onClick={() => handleCategoryClick(17)}>Home & Lifestyle</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1"
    onClick={() => handleCategoryClick(28)}>Medicine</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1"
    onClick={() => handleCategoryClick(86)}>Sports & Outdoor</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1">Baby’s & Toys</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1">Groceries & Pets</p>
  <p className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 transition duration-300 rounded-lg px-2 py-1">Health & Beauty</p>
</div>
          <div className="swiper-container" data-aos="fade-left">
            <Swiper
              className="mySwiper swiper-h" 
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="promo-banner" data-aos="fade-up">
                  <div className="promo-text">
                  <div className='flex items-center'>
                    <img src="/src/assets/1200px-Apple_gray_logo 1.png" alt="Apple Logo" className="apple-logo" />
                    <h2 className="series-title">iPhone 14 Series</h2>
                    </div>
                    <p className="discount">Up to 10% off Voucher</p>
                  
                    <button className="shop-now-btn">Shop Now →</button>
                  </div>
                  <div className="promo-image">
                    <img src="/src/assets/hero_endframe__cvklg0xk3w6e_large 2.png" alt="iPhone 14" className="iphone-image" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promo-banner">
                  <div className="promo-text">
                  <div className='flex items-center'>
                    <img src="/src/assets/1200px-Apple_gray_logo 1.png" alt="Apple Logo" className="apple-logo" />
                    <h2 className="series-title">iPhone 14 Series</h2>
                    </div>
                    <p className="discount">Up to 10% off Voucher</p>
                  
                    <button className="shop-now-btn">Shop Now →</button>
                  </div>
                  <div className="promo-image">
                    <img src="/src/assets/hero_endframe__cvklg0xk3w6e_large 2.png" alt="iPhone 14" className="iphone-image" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promo-banner">
                  <div className="promo-text">
                  <div className='flex items-center'>
                    <img src="/src/assets/1200px-Apple_gray_logo 1.png" alt="Apple Logo" className="apple-logo" />
                    <h2 className="series-title">iPhone 14 Series</h2>
                    </div>
                    <p className="discount">Up to 10% off Voucher</p>
                  
                    <button className="shop-now-btn">Shop Now →</button>
                  </div>
                  <div className="promo-image">
                    <img src="/src/assets/hero_endframe__cvklg0xk3w6e_large 2.png" alt="iPhone 14" className="iphone-image" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className='p-9'>
        <div className='flex items-center animate__animated animate__fadeInLeft'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>Today’s</p>
        </div>
        <div className='flex items-center justify-between  animate__animated animate__fadeInUp mt-3'>
            <p className='text-3xl font-bold'>Flash Sales</p>
            <div className='flex'>
                <div className='w-11 h-11 rounded-full bg-[#d8d8d8] flex justify-center items-center'><WestOutlinedIcon/></div>
                <div className='w-11 h-11 rounded-full bg-[#d8d8d8] flex justify-center items-center'><EastOutlinedIcon/></div>
            </div>
        </div>
        <Swiper
  style={{ paddingBlock: "50px" }}
  slidesPerView={4}
  spaceBetween={30}
  centeredSlides={true}
  pagination={{ clickable: true }}
  loop={true}
  modules={[Pagination]}
  className="mySwiper animate__animated animate__fadeIn"
>
  {cards && cards.map((product) => (
    <SwiperSlide key={product.id} className="animate__animated animate__fadeInUp p-4">
      {/* Обернули всё в Link */}
      <Link to={`/product/${product.id}`} className="block">
        <div
          className="relative border rounded-lg p-4 bg-no-repeat bg-cover h-64 w-full bg-opacity-100 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          style={{ backgroundImage: `url('http://135.181.152.249:8072/images/${product.image}')` }}
        >
          <div className="absolute top-2 left-2 w-16 h-8 rounded-md bg-red-600 flex items-center justify-center text-white font-semibold">
            <p>-40%</p>
          </div>

          {/* Иконка сердечка */}
          <div
            onClick={(e) => {
              e.preventDefault(); // Остановить только действие перехода по ссылке для иконки
              addToWishList(product); // Логика добавления в wishlist
            }}
            className="absolute top-2 right-2 text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
        </div>
      </Link>

      <div className="mt-6">
        <p className="font-bold text-lg text-gray-800 mb-2">{product.productName}</p>
        <p className="text-gray-600 text-md mb-2">${product.price}</p>
        <Stack spacing={1} className="flex justify-center">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <Button
          style={{ backgroundColor: "black", color: "white", marginTop: "10px" }}
          onClick={() => handleAddToCart(product.id)}
          className="hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          Add To Cart
        </Button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      <div className='flex justify-center animate__animated animate__fadeInUp '>
        <Button sx={{marginBlock:"20px", backgroundColor:"#DB4444",color:"white",fontSize:"10px",paddingBlock:"15px",paddingInline:"20px"}} onClick={goToAllProducts}>All Products</Button>
      </div>

        <div>
        <div className='flex items-center animate__animated animate__fadeInLeft'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>Categories</p>
        </div>
        </div>
        <div className='flex justify-between'>
            <p className='text-3xl font-bold animate__animated animate__fadeInRight mt-3'>Browse By Category</p>
            <div className='flex'>
                <div className='w-11 h-11 rounded-full bg-[#d8d8d8] flex justify-center items-center'><WestOutlinedIcon/></div>
                <div className='w-11 h-11 rounded-full bg-[#d8d8d8] flex justify-center items-center'><EastOutlinedIcon/></div>
            </div>
        </div>
        <div className='flex justify-between py-10'>
  <div className='w-24 h-24 border-[1px] border-[#b4b4b4] text-center p-3 animate__animated animate__fadeInUp animate__delay-1s'>
    <PhoneIphoneOutlinedIcon style={{fontSize:"50px"}}/>
    <p className='font-[poppins] text-xs'>Phones</p>
  </div>
  <div className='w-24 h-24 border-[1px] border-[#b4b4b4] text-center p-3 animate__animated animate__fadeInUp animate__delay-1s'>
    <ComputerOutlinedIcon style={{fontSize:"50px",}}/>
    <p className='font-[poppins] text-xs'>Computers</p>
  </div>
  <div className='w-24 h-24 border-[1px] border-[#b4b4b4] text-center p-3 animate__animated animate__fadeInUp animate__delay-2s'>
    <WatchOutlinedIcon style={{fontSize:"50px",}}/>
    <p className='font-[poppins] text-xs'>SmartWatch</p>
  </div>
  <div className='w-24 h-24 border-[1px] text-center p-3 bg-[#DB4444] animate__animated animate__fadeInUp animate__delay-2s'>
    <PhotoCameraOutlinedIcon style={{fontSize:"50px",color:"white"}}/>
    <p className='font-[poppins] text-xs text-white'>Camera</p>
  </div>
  <div className='w-24 h-24 border-[1px] border-[#b4b4b4] text-center p-3 animate__animated animate__fadeInUp animate__delay-3s'>
    <HeadphonesOutlinedIcon style={{fontSize:"50px",}}/>
    <p className='font-[poppins] text-xs'>HeadPhones</p>
  </div>
  <div className='w-24 h-24 border-[1px] border-[#b4b4b4] text-center p-3 animate__animated animate__fadeInUp animate__delay-3s'>
    <SportsEsportsOutlinedIcon style={{fontSize:"50px",}}/>
    <p className='font-[poppins] text-xs'>Gaming</p>
  </div>
</div>


        <div>
        <div className='flex items-center'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>This Month</p>
        </div>
        </div>
        <div className='flex justify-between mt-3'>
            <p className='text-3xl font-bold'>Best Selling Products</p>
        </div>
        <Swiper
  style={{ paddingBlock: "50px" }}
  slidesPerView={4}
  spaceBetween={30}
  centeredSlides={true}
  pagination={{ clickable: true }}
  loop={true}
  modules={[Pagination]}
  className="mySwiper animate__animated animate__fadeIn"
>
  {cards && cards.map((product) => (
    <SwiperSlide key={product.id} className="animate__animated animate__fadeInUp p-4">
     
      <Link to={`/product/${product.id}`} className="block">
        <div
          className="relative border rounded-lg p-4 bg-no-repeat bg-cover h-64 w-full bg-opacity-100 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          style={{ backgroundImage: `url('http://135.181.152.249:8072/images/${product.image}')` }}
        >
          <div className="absolute top-2 left-2 w-16 h-8 rounded-md bg-red-600 flex items-center justify-center text-white font-semibold">
            <p>-40%</p>
          </div>

      
          <div
            onClick={(e) => {
              e.preventDefault(); 
              addToWishList(product); 
            }}
            className="absolute top-2 right-2 text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
        </div>
      </Link>

      <div className="mt-6">
        <p className="font-bold text-lg text-gray-800 mb-2">{product.productName}</p>
        <p className="text-gray-600 text-md mb-2">${product.price}</p>
        <Stack spacing={1} className="flex justify-center">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <Button
          style={{ backgroundColor: "black", color: "white", marginTop: "10px" }}
          onClick={() => handleAddToCart(product.id)}
          className="hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          Add To Cart
        </Button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      <div className='flex justify-center animate__animated animate__fadeInUp '>
        <Button sx={{marginBlock:"20px", backgroundColor:"#DB4444",color:"white",fontSize:"10px",paddingBlock:"15px",paddingInline:"20px"}} onClick={goToAllProducts}>All Products</Button>
      </div>
      </section>
      <section >
        <div className='bg-black p-9 mb-5 flex justify-between w-[90%] mx-auto'>
    <div className='w-[30%]'>
        <p className='text-[#00FF66] text-[poppins]'>Categories</p>
        <p className='text-4xl font-bold text-white mt-5'>Enhance Your Music Experience</p>
        <div className='flex justify-between py-9'>
        <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>
            <div className='text-center font-[poppins] text-[12px]'>
            <p>23</p>
            <p>Hours</p>
            </div>
        </div>
        <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>
        <div className='text-center font-[poppins] text-[12px]'>
            <p>05</p>
            <p>Days</p>
            </div>
        </div>
        <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>
        <div className='text-center font-[poppins] text-[12px]'>
            <p>59</p>
            <p>Minutes</p>
            </div>
        </div>
        <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>
        <div className='text-center font-[poppins] text-[12px]'>
            <p>35</p>
            <p>Seconds</p>
            </div>
        </div>
        </div>
        <Button sx={{backgroundColor:'#00FF66',color:"black",fontFamily:"poppins",fontSize:"12px",paddingBlock:"20px",paddingInline:"35px"}} variant="contained">Buy Now!</Button>
    </div>
    <div className='w-[40%]'>
        <img src="/src/assets/Frame 694.png" alt="" />
    </div>
    </div>
      </section>

      <section className='p-9'>
      <div className='flex items-center'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>Our Products</p>
        </div>
        <div className='flex justify-between mt-3'>
            <p className='text-3xl font-bold'>Explore Our Products</p>
        </div>
  <div className="grid grid-cols-3 gap-8 py-8 font-[poppins]">
  {cards && cards.map((product) => (
    <div key={product.id} className="mx-auto transform transition duration-300 hover:scale-105">
      <div
        className="relative border rounded-lg p-4 bg-no-repeat bg-cover h-64 w-64 bg-opacity-100 shadow-lg hover:shadow-xl"
        style={{ backgroundImage: `url('http://135.181.152.249:8072/images/${product.image}')` }}
      >
        <div className="absolute top-2 left-2 w-16 h-8 rounded-md bg-red-600 flex items-center justify-center text-white font-semibold">
          <p>-40%</p>
        </div>
      </div>

      <div className="mt-4">
      <Button style={{ backgroundColor: "black", color: "white", marginTop: "10px" }} onClick={() => handleAddToCart(product.id)}className="hover:bg-gray-800 transition duration-200 ease-in-out">Add To Cart</Button>
        <p className="font-bold text-lg mt-3">{product.productName}</p>
        <p className="text-gray-600">${product.price}</p>
        <Stack spacing={1} className="flex justify-center mt-2">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
      </div>
    </div>
  ))}
</div>
<div className='flex justify-center animate__animated animate__fadeInUp '>
        <Button sx={{marginBlock:"20px", backgroundColor:"#DB4444",color:"white",fontSize:"10px",paddingBlock:"15px",paddingInline:"20px"}} onClick={goToAllProducts}>All Products</Button>
      </div>

      </section>
      <section className='p-9'>
      <div>
        <div className='flex items-center'>
        <div className='bg-[#DB4444] w-5 h-9 rounded-md'>
        </div>
        <p className='text-[#DB4444] font-[poppins] ml-2'>Featured</p>
        </div>
        </div>
            <p className='text-3xl font-bold py-3'>New Arrival</p>
            <div className='flex justify-between'>
            <div className='bg-[url("/src/assets/image.webp")] bg-no-repeat bg-cover w-[45%] h-[550px] text-white p-6 pt-80'>
             <p className='font-bold text-xl'>PlayStation 5</p>
             <p className='font-light w-[70%]'>Black and White version of the PS5 coming out on sale.</p>
             <p className='mt-4 font-bold'>Shop Now</p>
            </div>
            <div className='w-[45%]'>
                <div className='bg-[url("/src/assets/woman.png")] bg-no-repeat bg-cover w-[100%] h-[300px] text-white p-6 pt-40'>
                    <p className='font-bold text-xl'>Women’s Collections</p>
                    <p className='font-light w-[70%]'>Featured woman collections that give you another vibe.</p>
                    <p className='font-bold mt-4'>Shop Now</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                <div className='border-[10px] border-black bg-[url("/src/assets/kolonka.png")] bg-no-repeat bg-cover text-white h-[230px] w-[45%] p-6 pt-20'>
                <p className='font-bold text-xl'>Speakers</p>
                <p className='font-light text-[13px]'>Amazon wireless speakers</p>
                <p className='font-bold mt-4'>Shop Now</p>
                </div>
                <div className=' border-[10px] border-black bg-[url("/src/assets/parfum.png")] bg-no-repeat bg-cover text-white h-[230px] w-[45%] p-6 pt-20'>
                <p className='font-bold text-xl'>Perfume</p>
                <p className='font-light text-[13px]'>GUCCI INTENSE OUD EDP</p>
                <p className='font-bold mt-4'>Shop Now</p>
                </div>
                </div>
            </div>
            </div>
      </section>
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


      <Footer/>
    </div>
  )
}

export default Home;
