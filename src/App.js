import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/about.scss';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/about/About';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import Profile from './components/profile/Profile';
import Shipping from './components/cart/Shipping';

export const CART_PATH = '/cart';

const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
