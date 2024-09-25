import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Sign from './pages/Sign/Sign';
import Info from './pages/Info/Info';
import Cart from './pages/Cart/Cart';
import Login from './utils/login/login';
import Registration from './utils/registration/registration';
import ProtectedRout from './auth/ProtectedRoute';
import Products from './pages/allProducts/Products';
import Checkout from './pages/Checkout/Checkout';
import Wishlist from './pages/Wishlist/Wishlist';
// import Wishlist from './pages/Wishlist/Wishlist';
// import WishlistPage from './pages/Wishlist/Wishlist';






const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route
        path="/"
        element={
          <ProtectedRout>
            <Layout />
          </ProtectedRout>
        }
      >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign" element={<Sign />} />
          <Route path="product/:id" element={<Info />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='all-products' element={<Products/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path="/all-products/:id" element={<Products />} />
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
